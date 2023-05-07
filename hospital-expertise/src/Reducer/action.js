import { ERROR, LOADING, SUCCESS } from "./actionTypes";
import axios from 'axios'
export const postData=(data)=>(dispatch)=>{
 dispatch({type:LOADING})
 axios.post (`http://localhost:8080/data`,data)
 .then((res)=>{
    dispatch({type:SUCCESS})
 }).
 catch((error)=>{
    dispatch({type :ERROR})
 })
}