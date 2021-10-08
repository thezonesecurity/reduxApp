import { Types } from "../types/Types";

export const ApiAsync = (id) => {
  return (dispatch) => {
    fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then((body) => body.json())
      .then((data) => {
        //console.log("fech load", data);
        dispatch(loadData(data[0]));
      })
      .catch((error) => {});
  };
};

export const loadData = (data) => {
  return {
    type: Types.LOAD_API_BREAKINGBAD,
    payload: data,
  };
};
