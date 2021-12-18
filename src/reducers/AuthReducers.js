import { Types } from "../types/Types";

export const AuthReducers = (state = null, action) => {
  switch (action.type) {
    case Types.AUTH_LOGIN: {
      const { id, displayName, photo } = action.payload;
      return {
        id,
        displayName,
        photo,
      };
    }
    case Types.AUTH_LOGOUT: {
      return null;
    }
    default: {
      return state;
    }
  }
};
