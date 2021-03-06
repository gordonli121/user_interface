import { LOG_IN, LOG_OUT } from "./actionTypes";

export default function reducer(
  state = {
    isLoggedIn: false,
    userProfile: {
      userName: "UserName",
      userID: "userID",
      userPic: "http://userpic",
    },
    JWTToken: null,
  },
  action
) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        userProfile: action.userProfile,
        JWTToken: action.JWTToken,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        userProfile: {
          ...state.userProfile,
          userName: "UserName",
          userID: "userID",
          userPic: "http://userpic",
        },
        JWTToken: null,
      };
    default:
      return state;
  }
}

// structure:

// user info:
// - userName: String
// - loggedIn: Boolean
// - userPic: href
// -
