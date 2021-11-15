import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { name, img, description, price } = props.product;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ minWidth: 275, minHeight: 525,height:530, pb:2 }}>
        <CardContent sx={{textAlign:'left', }}>
          <CardMedia
            component='img'
            height='140'
            image={img}
            alt='green iguana'
            sx={{ minHeight: 300 }}
          />
          <Typography variant='h3' sx={{ fontSize: 18, mt:3, fontWeight:600,pl:1 }} color='text.primary' gutterBottom>
            {name}
          </Typography>
          <Typography variant='body1'  sx={{ fontSize: 18, mt:2, mb:1, fontWeight:600,pl:1  }} component='div'>Price: ${price}</Typography>
          <Typography variant='body1' sx={{pl:1 }} component='div'>{ description.slice(0,60)}...</Typography>
         
        </CardContent>
        <CardActions >
           <Link to='/purchase' style={{textDecoration:'none', paddingLeft:'15px'}}>
          <Button className="btn-ebike" >Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;



