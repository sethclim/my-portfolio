import React from "react";
import { CursorContext } from "./cursorProvider";

export default function withAppContext(Component) {
  return function WrapperComponent(props) {
    return (
      <CursorContext.Consumer>
        {state => <Component {...props} context={state} />}
      </CursorContext.Consumer>
    );
  };
}
