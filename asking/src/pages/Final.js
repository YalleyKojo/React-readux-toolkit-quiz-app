import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Change_score,Change_amount } from '../redux/dreducer'



const Final = () => {
  //variable declarations
 const {
  score,
  amount_of_question
 }=useSelector(store=>store.question)
const navigate=useNavigate()
const dispatch=useDispatch();

//handle on click funcionality
 const handleclick=()=>{

  dispatch(Change_score(0));
  dispatch(Change_amount(0));
  navigate("/");
 }

  return (
    <>
    <Box mt={30} mb={10}>
      <Typography variant='h3'>Your final score is {score} /{amount_of_question}: </Typography>
    </Box>
    <Box mt={10} >
        <Button onClick={handleclick} fullWidth variant='contained' type='submit'>
         Go back to Settings page
        </Button>

      </Box></>
  )
}

export default Final