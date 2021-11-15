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
  const [admin, setAdmin] = useState(false);

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
        saveUser(email, name, 'POST');
        setUserName();
        return;
        // logOut();
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

  useEffect(() => {
    fetch(`https://young-eyrie-90744.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logOut = (history) => {
    signOut(auth).then(() => {
      setUser({});
      history.push('/');
    });
  };

  // save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://young-eyrie-90744.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    setUser,
    admin,
    error,
    saveUser,
    isLoading,
    setIsLoading,
    email,
    name,
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
