import { GET_FAVORITES_LIST } from "../../config/constants/netflixClone";

const initialState = {
  favoritesList: [],
};

const netflixCloneReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FAVORITES_LIST:
      return {
        ...state,
        favoritesList: payload,
      };
    default:
      return state;
  }
};

export default netflixCloneReducer;
