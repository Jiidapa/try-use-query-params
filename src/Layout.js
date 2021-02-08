import React from "react";
import {
  Link,
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { useEffect } from "react";
import { StringParam, useQueryParams } from "use-query-params";
import Users from "./User";

const Layout = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users?deta_status=all">Users</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users" component={Users} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function About() {
  const [query, setQuery] = useQueryParams({
    test: StringParam,
  });

  return (
    <h2>
      About
      <div>
        <button onClick={() => setQuery({ test: "setUser" })}>setQuery</button>
      </div>
    </h2>
  );
}

export default Layout;
