import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { reactBridge } from "@garfish/bridge-react-v18";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const RootComponent = ({ basename }: { basename: string }) => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

export const provider = reactBridge({
  rootComponent: RootComponent,
  errorBoundary: (e) => <div>Error</div>,
});

if (!window.__GARFISH__) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
