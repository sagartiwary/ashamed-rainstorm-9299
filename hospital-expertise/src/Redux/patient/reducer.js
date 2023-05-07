import { GET_ERROR_DOCTOR, GET_REQUEST_DOCTOR, GET_SUCCESS_DOCTOR } from "./actiontype";

const initial = {
  isLoading: false,
  isError: false,
  doctors: [],
};

export const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case GET_REQUEST_DOCTOR:
      return{
        ...state,isLoading:true
      };
    case GET_SUCCESS_DOCTOR:
      return{
        ...state,isLoading:false,doctors:payload
      };
    case GET_ERROR_DOCTOR:
      return{
        ...state,isLoading:false,isError:true
      };

    default:
      return state;
  }
};
