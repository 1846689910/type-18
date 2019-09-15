import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import getPopupWindow from "./popup-window.js";

const Home = props => {
  const { dispatch } = props;
  getPopupWindow(props).open();
  return <div />;
};
Home.propTypes = {
  dispatch: PropTypes.func
};
export default connect(
  state => state, // mapStateToProps
  dispatch => ({ dispatch }) // mapDispatchToProps
)(Home);
