/**
 * Created by Eric on 9/6/2018.
 */
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import "../images/favicon.ico";
import "../../node_modules/leaflet/dist/leaflet.css";
import "../../node_modules/leaflet/dist/images/marker-icon.png";
import "../../node_modules/leaflet/dist/images/marker-icon-2x.png";
import "../../node_modules/leaflet/dist/images/marker-shadow.png";
import "../../node_modules/leaflet-measure/scss/leaflet-measure.scss";
import "leaflet";
import "leaflet-measure";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../css/main.css";
import $ from "jquery";
import "../../node_modules/jquery-ui-dist/jquery-ui.min.css";
import "../../node_modules/jquery-ui-dist/jquery-ui.structure.min.css";
import "../../node_modules/jquery-ui-dist/jquery-ui.theme.min.css";
import "../../node_modules/jquery-ui-dist/jquery-ui.min";
import "../../node_modules/jquery-ui-dist/jquery-ui.structure.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";
import store from "./settings/store";
import ReduxConcise from "./redux/ReduxConcise";
import ReactReduxConcise from "./react-redux/ReactReduxConcise";
import ReselectConcise from "./reselect/ReselectConcise";
import MobXConcise from "./mobx/MobXConcise";
import {Provider} from "react-redux";
import Main, {StatelessComp} from "./Main";

// ReactDOM.render(<Main />, document.querySelector("#root"));
const render = () => ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/redux"><ReduxConcise store={store}/></Route>
            <Route path="/react-redux">
                <Provider store={store}><ReactReduxConcise/></Provider>
            </Route>
            <Route path="/reselect">
                <Provider store={store}><ReselectConcise/></Provider>
            </Route>
            <Route path="/mobx" component={MobXConcise}/>
            <Route path="/" component={Main}/>
        </Switch>
    </Router>,document.querySelector("#root")
);
render();
store.subscribe(render);