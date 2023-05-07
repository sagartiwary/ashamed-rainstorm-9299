import React from "react";
import { LOADING, SUCCESS ,ERROR} from "./actionTypes";

const initState = {
  loading: false,
  error: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: true };
    case SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};
