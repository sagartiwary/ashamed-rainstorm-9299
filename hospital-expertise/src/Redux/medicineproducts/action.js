import axios from "axios";
import {
  GET_ERROR_PRODUCT,
  GET_REQUEST_PRODUCT,
  GET_SUCCESS_PRODUCT,
} from "./actiontype";


export const getPRODUCT = async(dispatch) => {
 dispatch(getPRODUCTrequest()) ;
  axios
    .get(`https://infinity-com.onrender.com/medicalproduct`)
    .then((res) => {
    dispatch(getPRODUCTsuccesst(res.data))
    })
    .catch((error) => {
     dispatch(getPRODUCTerror()) ;
    });
};

const getPRODUCTrequest = () => {
  return { type: GET_REQUEST_PRODUCT };
};
const getPRODUCTsuccesst = (payload) => {
  return { type: GET_SUCCESS_PRODUCT, payload };
};
const getPRODUCTerror = () => {
  return { type: GET_ERROR_PRODUCT };
};
