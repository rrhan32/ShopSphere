import * as React from 'react';
import {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { add_to_cart } from '../Redux';


export default function MediaCard(props) {
  const {produce_api,randomVal}=props
  const dispatch=useDispatch();
  // console.log("prod",produce_api)
  const {info}=props;
  const onCardClick=(info)=>{
    // console.log(info.info);
    return dispatch(add_to_cart(info.info))
  }

  // Generate a random index within the array's bounds
  return (
    <Card sx={{ maxWidth: 345, }}>
      <CardMedia
        sx={{ height: 140 }}
        
        image={info ?  info.image : "Loading..."}
        //  title= {produce_api && produce_api.length > 0 ?  produce_api[0].title : "NO"}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        {info ?  info.title : "Loading..."}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {produce_api && produce_api.length > 0 ?  produce_api[randomVal].description : "NO"} */}
        </Typography>
        <Typography  variant="body2" color="text">
           PRICE :  {info ?  info.price : "Loading..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>onCardClick({info})} size="small">Add To Cart</Button>
        <Link to="/checkout">
          <Button size='small'> Buy Now</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
