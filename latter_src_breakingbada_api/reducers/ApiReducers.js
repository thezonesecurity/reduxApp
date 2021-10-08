import React from "react";
import { Types } from "../types/Types";

export const ApiReducers = (state = {}, action) => {
  switch (action.type) {
    case Types.LOAD_API_BREAKINGBAD: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};
