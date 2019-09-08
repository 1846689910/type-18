import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

class DemoHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dispatch } = this.props;
    return <div>
      <h1>DemoHome</h1>
    </div>;
  }
}
DemoHome.propTypes = {};
export default connect(
  state => state,
  dispatch => ({ dispatch })
)(DemoHome);
