import { DELETE_SUCCESS, ERROR, GET_SUCCESS, LOADING, SUCCESS } from "./actionTypes";
import axios from "axios";
export const postData = (data) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .post(`http://localhost:8080/data`, data)
    .then((res) => {
      dispatch({ type: SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: ERROR });
    });
};

export const getData=(dispatch)=>{

   dispatch({type : LOADING})
   axios.get(`http://localhost:8080/data`)
   .then((res)=>{
      dispatch({type : GET_SUCCESS,payload : res.data})
   })
   .catch((error)=>{
      dispatch({type : ERROR})
   })
}

// export const deleteData=(id)=> (dispatch)=>{
//    dispatch({ type: LOADING });
//    let product = [];
 
//    axios.get(`http://localhost:8080/data`).then((res) => {
//      product = product.filter((ele) => ele.id !== id);
//    });
 
//    return axios
//      .delete(`http://localhost:8080/data/${id}`)
//      .then((res) => {
//        dispatch({ type: DELETE_SUCCESS, payload :product });
//      })
//      .catch((errr) => {
//        dispatch({ type: ERROR });
//      });

// }

