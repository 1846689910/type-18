import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import fa from "font-awesome/css/font-awesome.min.css";
import ws from "../../styles/Window.css";
import bs from "bootstrap/dist/css/bootstrap.min.css";

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unmount: false
    };
  }
  componentDidMount() {
    // console.log(jud);
    $(this._window) /*eslint-disable-line no-undef*/
      .draggable({
        handler: this._draggable
      })
      .resizable({
        handles: "ne, se, sw, nw",
        minHeight: 300,
        minWidth: 450,
        maxHeight: 550,
        maxWidth: 700
      });
    // this._window.querySelectorAll(".ui-resizable-handle").forEach(ele => {
    //   ele.classList.forEach(x => {
    //     if (jud[x]) ele.classList.replace(x, jud[x]);
    //   });
    // });
  }
  _setStyle = (dom, style) =>
    Object.entries(style).forEach(([k, v]) => (dom.style[k] = v));
  minimize = () =>
    this._setStyle(this._window, {
      width: "500px",
      height: "350px",
      marginLeft: "-250px",
      marginTop: "-175px"
    });
  maximize = () =>
    this._setStyle(this._window, {
      width: "700px",
      height: "550px",
      marginLeft: "-350px",
      marginTop: "-225px"
    });
  close = () => this.setState({ unmount: true });
  render() {
    const { dispatch } = this.props;
    if (this.state.unmount) return null;
    return (
      <div styleName={"ws.window"} ref={r => (this._window = r)}>
        <div styleName={"ws.window-title"} ref={r => (this._draggable = r)}>
          type-18
        </div>
        <div styleName={"ws.window-body"}>
          <div styleName={"ws.row1"}>
            <h2>...Amazing In Built...</h2>
            <Link to="/home">
              <button styleName={"bs.btn bs.btn-primary ws.demo-btn"}>
                Demo
              </button>
            </Link>
          </div>
        </div>
        <div styleName={"ws.window-ctrl"}>
          <i
            styleName={"fa.fa fa.fa-circle ws.close"}
            aria-hidden="true"
            onClick={this.close}
          ></i>
          <i
            styleName={"fa.fa fa.fa-circle ws.minimize"}
            aria-hidden="true"
            onClick={this.minimize}
          ></i>
          <i
            styleName={"fa.fa fa.fa-circle ws.maximize"}
            aria-hidden="true"
            onClick={this.maximize}
          ></i>
        </div>
      </div>
    );
  }
}
Window.propTypes = {
  dispatch: PropTypes.func
};
export default connect(
  state => state,
  dispatch => ({ dispatch })
)(Window);
