import { POST_ERROR_PATIENT, POST_REQUEST_PATIENT, POST_SUCCESS_PATIENT } from "./actiontype";

const initial = {
  isLoading: false,
  isError: false,
  patient: [],
};

export const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case POST_REQUEST_PATIENT:
      return{
        ...state,isLoading:true
      };
    case POST_SUCCESS_PATIENT:
      return{
        ...state,isLoading:false,patient:[...state.patient,payload]
      };
    case POST_ERROR_PATIENT:
      return{
        ...state,isLoading:false,isError:true
      };

    default:
      return state;
  }
};
