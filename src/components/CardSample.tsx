import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from "./MediaCard";

function CardSample(props:any) {
  const {onCardsClick,product_api}=props
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Generate a random index within the array's bounds

// Use the random index to get a random number from the array
const randomValue = numbers[Math.floor(Math.random() * numbers.length)];
  const Item = styled(Paper)(() => ({
    backgroundColor: '#98d6a9',
    padding: 8,
    textAlign: 'center',
    color: 'black',
  }));

  return (
    <>
      <Grid container spacing={6}>

        <Grid item xs={4}>
          <MediaCard onCardClick={onCardsClick} produce_api={product_api} randomVal={0}/>
        </Grid>

        <Grid item xs={4}>
          <MediaCard onCardClick={onCardsClick} produce_api={product_api} randomVal={1}/>
        </Grid>

        <Grid item xs={4}>
          <MediaCard onCardClick={onCardsClick} produce_api={product_api} randomVal={2}/>
        </Grid>

        <Grid item xs={4}>
          <MediaCard onCardClick={onCardsClick} produce_api={product_api} randomVal={3}/>
        </Grid>

        <Grid item xs={4}>
          <MediaCard onCardClick={onCardsClick} produce_api={product_api} randomVal={2}/>
        </Grid>

        <Grid item xs={4}>
          <MediaCard onCardClick={onCardsClick} produce_api={product_api} randomVal={1}/>
        </Grid>

      </Grid>
    </>
  )
}

export default CardSample;