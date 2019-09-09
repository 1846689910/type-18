import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import nav from "../../styles/Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  validateActive = (route, curPath) => route.path === curPath ? "active" : ""
  render() {
    const { route } = this.props;
    return (
      <div styleName="nav.wrapper">
        <div styleName="nav.header">
          <h1 styleName="nav.h1">type-18</h1>
        </div>
        <div styleName={"nav.nav"}>
          <div styleName={"nav.nav-inside"}>
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
                  <li className={`nav-item ${this.validateActive(route, "/")}`} styleName={"nav.nav-item"}>
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className={`nav-item ${this.validateActive(route, "/redux")}`} styleName={"nav.nav-item"}>
                    <Link className="nav-link" to="/redux">
                      Redux
                    </Link>
                  </li>
                  <li className={`nav-item ${this.validateActive(route, "/react-redux")}`} styleName={"nav.nav-item"}>
                    <Link className="nav-link" to="/react-redux">
                      React-Redux
                    </Link>
                  </li>
                  <li className={`nav-item ${this.validateActive(route, "/reselect")}`} styleName={"nav.nav-item"}>
                    <Link className="nav-link" to="/reselect">
                      Reselect
                    </Link>
                  </li>
                  <li className={`nav-item ${this.validateActive(route, "/mobx")}`} styleName={"nav.nav-item"}>
                    <Link className="nav-link" to="/mobx">
                      MobX
                    </Link>
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
      </div>
    );
  }
}
Nav.propTypes = {
  route: PropTypes.object
};
export default connect(
  state => state,
  dispatch => ({ dispatch })
)(Nav);
