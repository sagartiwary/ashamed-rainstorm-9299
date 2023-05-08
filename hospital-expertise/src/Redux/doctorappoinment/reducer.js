import { PATCH_ERROR_DOCTOR, PATCH_REQUEST_DOCTOR, PATCH_SUCCESS_DOCTOR } from "./actiontype";

const initial = {
  isLoading: false,
  isError: false,
  doctors: [],
};

export const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case PATCH_REQUEST_DOCTOR:
      return{
        ...state,isLoading:true
      };
    case PATCH_SUCCESS_DOCTOR:
      return{
        ...state,isLoading:false
      };
    case PATCH_ERROR_DOCTOR:
      return{
        ...state,isLoading:false,isError:true
      };

    default:
      return state;
  }
};
