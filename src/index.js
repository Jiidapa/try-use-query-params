import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <QueryParamProvider ReactRouterRoute={Route}>
      <App />
    </QueryParamProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
