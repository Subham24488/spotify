export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCVeVGT7nzGTMu0a07EMDcZ2J5EOjjBvlXCSeiPbIlcP2wDfgfKoXS_uS4duf_VlHsBjplFTNkpB48kUJJTsplOWotqWaOFwfegWLnrLV8QXJ6fLskyvopz1_iy99IjLzRhKs6_gcyLiDTPzWsNnZnEi1W__i9UNJpKSWgasso6Y7rR",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playLists: action.playLists,
      };
    case "SET_DISCOVER_WEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
