import "./App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useHistory,
// } from "react-router-dom";
import Layout from "./Layout";
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

function App() {
  return (
    <div className="App">
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
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/users?deta_status=all">Users</Link>
            </li>
          </ul>
        </nav>

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
    </div>
  );
}

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

export default App;
