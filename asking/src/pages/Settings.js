
import { Box, Button, CircularProgress } from '@mui/material'
import React from 'react'
import SelectField from '../components/SelectField'
import TextFieldComp from '../components/TextFieldComp'
import useAxios from '../hooks/useAxios'
import {useNavigate} from 'react-router-dom'

const Settings = () => {
  

//variable declarations and assingments
const navigate=useNavigate()

const { response,loading,error }=useAxios({url:"api_category.php"});
if(loading){
    return(
        <Box mt={20}>
            <CircularProgress></CircularProgress>
        </Box>
    )
}

const difficultyOptions=[
    {
        id:"easy",name:"Easy"
    
    },
    {id:"medium",name:"Medium"},
    {id:"hard",name:"hard"}
]

const typeOptions=[
    {
        id:"multiple",name:"Multiple Choice"
    
    },
    {id:"boolean",name:"True/False"}
    
]
//handle submit function 
const handlesubmit= (e)=>{
    e.preventDefault();
    navigate("/questions")
}


  return (
    <form onSubmit={handlesubmit}>
        <SelectField options={response.trivia_categories} label="Category"/>
        <SelectField options={difficultyOptions} label="Difficulty"/>
        <SelectField options={typeOptions} label="Type"/>
        <TextFieldComp/>
        <Box  mt={3}  width='100'>
            <Button fullWidth variant='contained' type='submit'>
                Get Started
            </Button>
        </Box>
    </form>
    
  )
}

export default Settings