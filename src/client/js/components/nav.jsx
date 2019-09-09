import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import nav from "../../styles/Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dispatch } = this.props;
    return (
      <div
        style={{
          alignSelf: "center",
          width: "100%",
          textAlign: "center",
          margin: "10px 0",
          background: "#343a40",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div style={{ width: "80%", alignSelf: "center" }}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto" styleName={"nav.navbar-nav"}>
                <li className="nav-item active" styleName={"nav.nav-item"}>
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item" styleName={"nav.nav-item"}>
                  <a className="nav-link" href="#">
                    Redux
                  </a>
                </li>
                <li className="nav-item" styleName={"nav.nav-item"}>
                  <a className="nav-link" href="#">
                    React-Redux
                  </a>
                </li>
                <li className="nav-item" styleName={"nav.nav-item"}>
                  <a className="nav-link" href="#">
                    Reselect
                  </a>
                </li>
                <li className="nav-item" styleName={"nav.nav-item"}>
                  <a className="nav-link" href="#">
                    MobX
                  </a>
                </li>
                <li className="nav-item dropdown" styleName={"nav.nav-item"}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
Nav.propTypes = {
  dispatch: PropTypes.func
};
export default connect(
  state => state,
  dispatch => ({ dispatch })
)(Nav);
