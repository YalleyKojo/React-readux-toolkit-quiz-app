import { createSlice } from "@reduxjs/toolkit";

const initialState={
    question_category:'',
    question_difficulty:"",
    question_type:"",
    amount_of_question: 50,
    score: 0
}

const dreducer= createSlice({
    name:"dreducer",
    initialState,
    reducers:{
        Change_category:(state,{payload})=>{
            return{...state,
                question_category:payload

            }
        },
        Change_difficulty:(state,{payload})=>{
            return{...state,
                question_difficulty:payload

            }
        },
        Change_type:(state,{payload})=>{
            return{...state,
                question_type:payload

            }
        },
        Change_amount:(state,{payload})=>{
            return{...state,
                amount_of_question:payload

            }
        },
        Change_score:(state,{payload})=>{
            return{
                ...state,
                score:payload
            }
        }

    }
})
export const{Change_category,Change_amount,Change_type,Change_difficulty,Change_score}=dreducer.actions;
export default dreducer.reducer;