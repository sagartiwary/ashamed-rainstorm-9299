import { GET_ERROR_PRODUCT, GET_REQUEST_PRODUCT, POST_SUCCESS_PRODUCT,DELETE_SUCCESS_PRODUCT, ADD_SUCCESS_PRODUCT } from "./actiontype";

const initial = {
  isLoading: false,
  isError: false,
  addtocard: [],
};

export const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case GET_REQUEST_PRODUCT:
      return{
        ...state,isLoading:true
      };
    case ADD_SUCCESS_PRODUCT:
      return{
        ...state,isLoading:false,products:payload
      };
    case GET_ERROR_PRODUCT:
      return{
        ...state,isLoading:false,isError:true
      };
    case DELETE_SUCCESS_PRODUCT:
      return{
        ...state,isLoading:false,isError:true
      };
    case POST_SUCCESS_PRODUCT:
      return{
        ...state,isLoading:false,products:[...state.products,payload]
      };

    default:
      return state;
  }
};
