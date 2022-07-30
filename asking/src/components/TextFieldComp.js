import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Change_amount } from '../redux/dreducer'

const TextFieldComp = () => {
const dispatch=useDispatch()
  const handleamountchange=(e)=>{
     dispatch(Change_amount(e.target.value))
  }
  return (
   <Box mt={3} width='100'>
    <FormControl fullWidth>
      <TextField
        onChange={handleamountchange}
        variant="outlined"
        label='Amount of Questions' 
        type='number'
        size='small'/>
      
    </FormControl>
   </Box>
  )
}

export default TextFieldComp