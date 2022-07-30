import { Box, Button, Typography,CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAxios from '../hooks/useAxios'
import { useState } from 'react'
import { Change_difficulty, Change_score } from '../redux/dreducer'
import { useNavigate} from 'react-router-dom'
//random integer  generation function
const getRandomInt=(number)=>{
    return Math.floor(Math.random()*number)
}

const Questions = () => {
    
    //variable declaration
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
         score

    }=useSelector(store=>store.question)
 const dispatch=useDispatch()

//dynamic api querry
let apiUrl=`api.php?amount=${amount_of_question}`

if(question_category){
    apiUrl.concat(`&category=${question_category}`);
}

if(question_difficulty){
    apiUrl.concat(`&difficulty=${question_difficulty}`);
}

if(question_type){
    apiUrl.concat(`&type=${question_type}`);
}


const { response,loading,error }=useAxios({url:apiUrl});
const [index,setIndex]=useState(0);
const [options,setOptions]=useState([]);
const navigate=useNavigate();

//get the options for the questions

useEffect(()=>{
    if(response?.results.length){
      const question=response.results[index];
      let answers=[...question.incorrect_answers];

     //get random index to insert the correct answer 
       answers.splice(
           getRandomInt(question.incorrect_answers.length)
           ,0,
           question.correct_answer
       )
       setOptions(answers)
    }
   
   },[response,index])
   

if(loading){
    return(
        <Box mt={20}>
            <CircularProgress></CircularProgress>
        </Box>
    )
}
//handle submit function
const handlesubmitclick=(e)=>{
    const question=response.results[index];
    if(e.target.textContent===question.correct_answer){
        dispatch(Change_score(score + 1))
    }

    if(index+1 <response.results.length){
    setIndex(index+1)
    }
    else{
   navigate('/score') 
    }
}


  return (
   <Box mt={3} width='100'>
    <Typography variant="h4" >
        Question {index}
    </Typography>
    <Typography>{response.results[index].question}</Typography>

     {options.map((data,id)=>(
            <Box mt={3} width='100' key={id}>
            <Button onClick={handlesubmitclick} variant="contained">{data}</Button>
          </Box>
     ))}

    <Box mt={5} width='100'>
       Score: {score}/{amount_of_question}
    </Box>

    
   </Box>
  )
}

export default Questions