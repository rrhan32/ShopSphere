import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from "./MediaCard";

function CardSample(props:any) {
  const {onCardsClick}=props

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
          <MediaCard onCardClick={onCardsClick} />
        </Grid>

        <Grid item xs={4}>
          <MediaCard onCardClick={onCardsClick}/>
        </Grid>

        <Grid item xs={4}>
          <MediaCard onCardClick={onCardsClick}/>
        </Grid>

        <Grid item xs={4}>
          <MediaCard onCardClick={onCardsClick}/>
        </Grid>

        <Grid item xs={4}>
          <MediaCard onCardClick={onCardsClick}/>
        </Grid>

        <Grid item xs={4}>
          <MediaCard onCardClick={onCardsClick}/>
        </Grid>

      </Grid>
    </>
  )
}

export default CardSample;