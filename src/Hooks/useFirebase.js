import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google sign in
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //  Sign in with email and password
  const signInWithEmailAndPass = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Create New User
  const createNewUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError('');
        console.log(result.user);
        setUserName();
        logOut();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // observe user state changed
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = (history) => {
    signOut(auth).then(() => {
      setUser({});
      history.push('/');
    });
  };

  return {
    user,
    setUser,
    error,
    isLoading,
    setIsLoading,
    setName,
    setEmail,
    setPassword,
    logOut,
    signInUsingGoogle,
    createNewUser,
    signInWithEmailAndPass,
  };
};

export default useFirebase;
