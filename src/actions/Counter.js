import { Types } from "../types/Types";
//----- funciones asincronas
export const incrementAsyncxCounter = (counter) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementCounter(counter));
    }, 5000);
  };
};
//----- fuciones sincronas
export const incrementCounter = (counter) => {
  return { type: Types.IMCREMENT_COUNTER, payload: counter };
};
export const decrementCounter = (counter) => {
  return { type: Types.DECREMENT_COUNTER, payload: counter };
};
export const resetCounter = (counter) => {
  return { type: Types.RESET_COUNTER, payload: counter };
};
