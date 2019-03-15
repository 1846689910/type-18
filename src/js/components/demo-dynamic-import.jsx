import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setShowFakeComp } from "../settings/actions";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"; // eslint-disable-line
import Promise from "bluebird";
const NamedLazyComp = lazy(() => import("./demo-fake").then(module => ({ default: module.Fake })));
const DefaultLazyComp = lazy(() => import("./demo-fake"));

let Fake;
const loadFakeComp = (dispatch, doRefresh = false) => {
  if (!Fake || doRefresh) {
    const ready = doRefresh
      ? Promise.try(() => dispatch(setShowFakeComp(false))).delay(1000)
      : Promise.try(() => {});
    ready
      .then(() => import("./demo-fake"))
      .then(({ Fake: _Fake }) => {
        Fake = _Fake;
        dispatch(setShowFakeComp(true));
      });
  }
};

const DynamicImportDemo = props => {
  const { showFakeComp, dispatch } = props;
  loadFakeComp(dispatch);
  return (
    <div>
      <h6>Webpack Dynamic Import</h6>
      {showFakeComp.value && Fake ? <Fake {...props} /> : <div>Fake Comp is loading ...</div>}
      <button
        styleName={"bootstrap.btn bootstrap.btn-primary"}
        onClick={() => loadFakeComp(dispatch, true)}
      >
        Refresh Fake Comp
      </button>
      <h6>React Lazy Suspense Dynamic Import</h6>
      <Suspense fallback={<div>MyLazyComp is Loading</div>}>
        <NamedLazyComp />
        <DefaultLazyComp />
      </Suspense>
    </div>
  );
};
DynamicImportDemo.propTypes = {
  showFakeComp: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(
  state => state,
  dispatch => ({ dispatch })
)(DynamicImportDemo);
