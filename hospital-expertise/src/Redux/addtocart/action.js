import axios from "axios";
import {
  DELETE_SUCCESS_PRODUCT,
  GET_ERROR_PRODUCT,
  GET_REQUEST_PRODUCT,
  ADD_SUCCESS_PRODUCT,
} from "./actiontype";

import {
  POST_SUCCESS_PRODUCT,
} from "./actiontype";

export const getproduct = async(dispatch) => {
 dispatch(getPRODUCTrequest()) ;
  return axios
    .get(`https://infinity-com.onrender.com/addcartdata`)
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
  return { type: ADD_SUCCESS_PRODUCT, payload };
};

const getPRODUCTerror = () => {
  return { type: GET_ERROR_PRODUCT };
};



export const postproduct = (cart)=>async(dispatch) => {
 dispatch(postproductrequest()) ;
  return axios
    .post(`https://infinity-com.onrender.com/addcartdata`,cart)
    .then((res) => {
    dispatch(postproductsuccesst(res.data))
    })
    .catch((error) => {
     dispatch(postproducterror()) ;
    });
};







export const deleteproduct = (id)=>async(dispatch) => {
  console.log("id................................",id)
 dispatch(postproductrequest()) ;
  return axios.delete(`https://infinity-com.onrender.com/addcartdata/${id}`).then((res) => {
    dispatch(deletePRODUCTsuccesst(res.data))
  
    })
    
    .catch((error) => {
     dispatch(postproducterror()) ;
    });
};

const postproductrequest = () => {
  return { type: GET_REQUEST_PRODUCT };
};
const postproductsuccesst = (payload) => {
  return { type: POST_SUCCESS_PRODUCT, payload };
};
const postproducterror = () => {
  return { type: GET_ERROR_PRODUCT };
};
const deletePRODUCTsuccesst = (payload) => {
  return { type: DELETE_SUCCESS_PRODUCT };
};
