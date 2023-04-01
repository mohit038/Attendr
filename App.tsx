import * as React from "react";
import Theme from "./theme/Theme";
import Router from "./navigation/Router";

export default function App() {
  return (
    <Theme>
      <Router />
    </Theme>
  );
}
