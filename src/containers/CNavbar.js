import { connect } from "react-redux";
import { NavBar } from "../components/NavBar";

const mapStateToProps = (state) => {
  return {
    userProfile: state.userProfile,
    JWTToken: state.JWTToken,
  };
};

const CNavbar = connect(mapStateToProps, null)(NavBar);
export default CNavbar;
