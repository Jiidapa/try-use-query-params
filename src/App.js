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
      {/* <Router>
        <div>
          <Switch>
            <Route path="/" component={Layout} exact />
          </Switch>
        </div>
      </Router> */}
      <div>
        {/* <Router> */}
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
        {/* </Router> */}
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

// import {
//   QueryParamProvider,
//   useQueryParam,
//   NumberParam,
//   withDefault,
// } from "use-query-params";
// import React, { useEffect } from "react";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Switch>
//           <Route path="/second-page">
//             <SecondPage />
//           </Route>
//           <Route path="/">
//             <FirstPage />
//           </Route>
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;

// const FirstPage = () => {
//   return (
//     <div>
//       <p>This is the first page.</p>
//       <Link to="/second-page">Go to the second page</Link>
//     </div>
//   );
// };

// const SecondPage = () => {
//   const [param, setParam] = useQueryParam(
//     "param",
//     withDefault(NumberParam, 10)
//   );

//   useEffect(() => {
//     setParam(param);
//   }, []);

//   return (
//     <div>
//       <p>This is the second page.</p>
//       <p>Param is {param}</p>
//       <Link to="/">Go to the first page</Link>
//       <p>
//         <button onClick={() => setParam(100)}>Set param to 100</button>
//       </p>
//     </div>
//   );
// };
