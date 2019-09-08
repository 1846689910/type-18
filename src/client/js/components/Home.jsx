import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Window from "./Window1";

const Home = props => {
  const { dispatch } = props;
  return (
    <div>
      <Window/>
    </div>
  );
};
Home.propTypes = {
  dispatch: PropTypes.func
};
export default connect(
  state => state,  // mapStateToProps
  dispatch => ({ dispatch })  // mapDispatchToProps
)(Home);
