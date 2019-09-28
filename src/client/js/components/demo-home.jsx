import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Carousel from "./Carousel";
import bs from "bootstrap/dist/css/bootstrap.min.css";

class DemoHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dispatch, route } = this.props;
    return <div style={{display: "flex", flexFlow: "column wrap", justifyContent: "center"}}>
      <Nav route={route}/>
      <div style={{ alignSelf: "center", width: "80%", textAlign: "center" }}>
        <Carousel />
      </div>
      <div style={{alignSelf: "center", width: "80%", textAlign: "center", height: "200px", margin: "10px 0", background: "gray"}}>World</div>
      <div style={{alignSelf: "center", width: "80%", textAlign: "center", height: "200px", margin: "10px 0", background: "gray"}}>Row</div>
      <div style={{alignSelf: "center", width: "80%", textAlign: "center", height: "200px", margin: "10px 0", background: "gray"}}>Row</div>
    </div>;
  }
}
DemoHome.propTypes = {
  dispatch: PropTypes.func,
  route: PropTypes.object
};
export default connect(
  state => state,
  dispatch => ({ dispatch })
)(DemoHome);
