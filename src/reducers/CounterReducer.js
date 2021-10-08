import { Types } from "../types/Types";

export const CounterReducer = (state = 1, action) => {
  switch (action.type) {
    case Types.IMCREMENT_COUNTER: {
      return state + action.payload;
    }
    case Types.DECREMENT_COUNTER: {
      return state - action.payload;
    }
    case Types.RESET_COUNTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
