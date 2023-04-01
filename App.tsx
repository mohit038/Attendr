import HomeView from "./pages/HomeView";
import * as React from "react";
import Theme from "./theme/Theme";

export default function App() {
  return (
    <Theme>
      <HomeView />
    </Theme>
  );
}
