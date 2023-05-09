import axios from "axios";
import {
  DELETE_SUCCESS_PRODUCT,
  DELETE_ERROR_PRODUCT,
  DELETE_REQUEST_PRODUCT,
  
} from "./actiontype";

import {
  POST_SUCCESS_PRODUCT,
} from "./actiontype";




export const deleteproduct = (id)=>async(dispatch) => {
  console.log("id................................",id)
 dispatch(postproductrequest()) ;
  return axios
    .delete(`https://infinity-com.onrender.com/addcartdata/${id}`)
    .then((res) => {
    // dispatch(deletePRODUCTsuccesst(res.data))
  
    })
    .catch((error) => {
     dispatch(postproducterror()) ;
    });
};

const postproductrequest = () => {
  return { type:DELETE_REQUEST_PRODUCT };
};
const postproductsuccesst = (payload) => {
  return { type: DELETE_SUCCESS_PRODUCT, payload };
};
const postproducterror = () => {
  return { type:DELETE_ERROR_PRODUCT };
};
