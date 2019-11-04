import { Binder } from "cicero/lib/client";
Binder.bind({
  REDIRECT({ props, uri }) {
    props && props.history && props.history.push(uri);
  }
});
export default Binder;