export default function reducer(
  state = {
    isLoggedIn: false,
    userProfile: {
      userName: "UserName",
      userID: "userID",
      userPic: "http://userpic",
    },
    JWTToken: "a",
  },
  action
) {
  switch (action.type) {
    case "LogIn":
      return {
        ...state,
        isLoggedIn: true,
        userProfile: {
          ...state.userProfile,
          userName: action.payload.userProfile.userName,
          userID: action.payload.userProfile.userID,
          userPic: action.payload.userProfile.userPic,
        },
        JWTToken: action.payload.JWTToken,
      };
    case "LogOut":
      return {
        ...state,
        isLoggedIn: false,
        userProfile: {
          ...this.userProfile,
          userName: "UserName",
          userID: "userID",
          userPic: "http://userpic",
        },
        JWTToken: "a",
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
