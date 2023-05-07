import axios from "axios";
import {
  POST_ERROR_PATIENT,
  POST_REQUEST_PATIENT,
  POST_SUCCESS_PATIENT,
} from "./actiontype";


export const postpatient =(newpatient)=> async(dispatch) => {
 dispatch(postpatientrequest()) ;
  axios
    .post(`https://infinity-com.onrender.com/patientdetails`,newpatient)
    .then((res) => {
    dispatch(postpatientsuccesst(res.data))
    console.log(res)
    })
    .catch((error) => {
     dispatch(postpatienterror()) ;
    });
};

const postpatientrequest = () => {
  return { type: POST_REQUEST_PATIENT };
};
const postpatientsuccesst = (payload) => {
  return { type: POST_SUCCESS_PATIENT, payload };
};
const postpatienterror = () => {
  return { type: POST_ERROR_PATIENT };
};
