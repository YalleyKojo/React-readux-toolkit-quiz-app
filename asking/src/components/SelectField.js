import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from "@mui/system";
import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { Change_category, Change_difficulty, Change_type } from '../redux/dreducer';


const SelectField = ({ label,options }) => {
    //variable declarations and submission
     const [value,setValue]=useState('');
     const dispatch=useDispatch();
//handlechange function 
     const handlechange=(e)=>{
        setValue(e.target.value);
        
        switch(label){
            case "Category":
                dispatch(Change_category(e.target.value));
                break;
            case "Difficulty":
                dispatch(Change_difficulty(e.target.value));
                break;
            case "Type":
                dispatch(Change_type(e.target.value));
                break;
                
            default:
                return;           

        }
     }
 
  return (
    <Box mt={3} width="100">
        <FormControl size="small" fullWidth>

            <InputLabel>{label}</InputLabel>
            <Select value={value}
            label={label}
            onChange={handlechange}>
                 {
                    options.map(({id,name})=>(
                        <MenuItem value={id} key={id}>
                            {name}
                        </MenuItem>
                    ))
                 }
                 
            </Select>
        </FormControl>

    </Box>
  )
}

export default SelectField