import { PopupWindow } from "cicero/lib/client";
import ws from "../../styles/Window.css";
import bs from "bootstrap/dist/css/bootstrap.min.css";
import { Binder } from "cicero/lib/client";

function getPopupWindow(props) {
  const bodyHTML = `
    <div style="height: 100%; width: 100%; display: flex; flex-flow: row wrap; justify-content: center; overflow: hidden;">
      <div style="align-self:center;">
        <h2 style="text-align:center;">...Amazing In Built...</h2>
        <div style="text-align:center;">
          <button class="${bs.btn} ${bs["btn-primary"]} ${ws["demo-btn"]}">Demo</button>
        </div>
      </div>
    </div>
  `;
  const popup = new PopupWindow({ title: "Welcome to type-18", bodyHTML });
  popup.getWindowBody().querySelector(`button.${bs.btn}`).addEventListener(
    "click",
    () => {
      Binder.dispatch({ type: "REDIRECT", props, uri: "/home" });
      popup.close();
    },
    false
  );
  return popup;
}

export default getPopupWindow;
