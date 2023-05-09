import React from "react";
import {
  LOADING,
  SUCCESS,
  ERROR,
  GET_SUCCESS,
  DELETE_SUCCESS,
} from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  doctorData: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: true };
    case SUCCESS:
      return { ...state, loading: false };
    case GET_SUCCESS:
      return { ...state, loading: false, doctorData: payload };
    case DELETE_SUCCESS:
      return { ...state, loading: false, doctorData: payload };

    default:
      return state;
  }
};
