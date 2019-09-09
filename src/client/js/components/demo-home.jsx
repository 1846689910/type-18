import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "./nav";
import bs from "bootstrap/dist/css/bootstrap.min.css";

class DemoHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dispatch } = this.props;
    return <div style={{display: "flex", flexFlow: "column wrap", justifyContent: "center"}}>
      <div style={{ alignSelf: "center", width: "80%", textAlign: "center", margin: "10px 0" }}>
        <h1 style={{ textAlign: "left" }}>type-18</h1>
      </div>
      <Nav/>
      <div style={{alignSelf: "center", width: "80%", textAlign: "center", height: "200px", margin: "10px 0", background: "gray"}}>Carousel</div>
      <div style={{alignSelf: "center", width: "80%", textAlign: "center", height: "200px", margin: "10px 0", background: "gray"}}>World</div>
      <div style={{alignSelf: "center", width: "80%", textAlign: "center", height: "200px", margin: "10px 0", background: "gray"}}>Row</div>
      <div style={{alignSelf: "center", width: "80%", textAlign: "center", height: "200px", margin: "10px 0", background: "gray"}}>Row</div>
    </div>;
  }
}
DemoHome.propTypes = {};
export default connect(
  state => state,
  dispatch => ({ dispatch })
)(DemoHome);
