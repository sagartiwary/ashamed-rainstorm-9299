import axios from "axios";
import {
  PATCH_ERROR_DOCTOR,
  PATCH_REQUEST_DOCTOR,
  PATCH_SUCCESS_DOCTOR,
} from "./actiontype";


export const PATCHdoctor = (id,update)=>async(dispatch) => {
 dispatch(PATCHdoctorrequest()) ;
  axios
    .patch(`https://infinity-com.onrender.com/doctors/${id}`,update)
    .then((res) => {
    dispatch(PATCHdoctorsuccesst(res.data))
    })
    .catch((error) => {
     dispatch(PATCHdoctorerror()) ;
    });
};

const PATCHdoctorrequest = () => {
  return { type: PATCH_REQUEST_DOCTOR };
};
const PATCHdoctorsuccesst = (payload) => {
  return { type: PATCH_SUCCESS_DOCTOR, payload };
};
const PATCHdoctorerror = () => {
  return { type: PATCH_ERROR_DOCTOR };
};
