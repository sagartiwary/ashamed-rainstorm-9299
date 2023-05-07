import axios from "axios";
import {
  GET_ERROR_DOCTOR,
  GET_REQUEST_DOCTOR,
  GET_SUCCESS_DOCTOR,
} from "./actiontype";


export const getdoctor = async(dispatch) => {
 dispatch(getdoctorrequest()) ;
  axios
    .get(`https://infinity-com.onrender.com/doctors`)
    .then((res) => {
    dispatch(getdoctorsuccesst(res.data))
    })
    .catch((error) => {
     dispatch(getdoctorerror()) ;
    });
};

const getdoctorrequest = () => {
  return { type: GET_REQUEST_DOCTOR };
};
const getdoctorsuccesst = (payload) => {
  return { type: GET_SUCCESS_DOCTOR, payload };
};
const getdoctorerror = () => {
  return { type: GET_ERROR_DOCTOR };
};
