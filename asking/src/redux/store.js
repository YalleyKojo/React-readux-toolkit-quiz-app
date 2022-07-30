import { configureStore } from "@reduxjs/toolkit";
import dreducerReducer from "./dreducer"

const store= configureStore(
   {
    reducer:{
        question:dreducerReducer
    }}
);

export default store;