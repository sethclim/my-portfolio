import React from "react";
import { Route } from "react-router-dom";
export function Section({ component: Comp, title, subtitle, id, ...rest }) {
  return (
    <div className="section">
      <div className="section-content" id={id}>
        <Route
          {...rest}
          render={(props) => (
            <Comp {...props} title={title} subtitle={subtitle} />
          )}
        />
      </div>
    </div>
  );
}
