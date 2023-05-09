import { GET_ERROR_PRODUCT, GET_REQUEST_PRODUCT, GET_SUCCESS_PRODUCT } from "./actiontype";

const initial = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case GET_REQUEST_PRODUCT:
      return{
        ...state,isLoading:true
      };
    case GET_SUCCESS_PRODUCT:
      return{
        ...state,isLoading:false,products:payload
      };
    case GET_ERROR_PRODUCT:
      return{
        ...state,isLoading:false,isError:true
      };

    default:
      return state;
  }
};
