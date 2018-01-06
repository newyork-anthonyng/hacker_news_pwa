import { h, render, Component } from "preact";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Home = () => <Redirect to="/top" />
const Top = () => <h1>Top</h1>
const New = () => <h1>New</h1>
const Show = () => <h1>Show</h1>
const Ask = () => <h1>Ask</h1>
const Jobs = () => <h1>Jobs</h1>
const NoMatch = () => <Redirect to="/" />

const App = () => (
  <div>
    <Header />

    <hr />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/top" component={Top} />
      <Route path="/new" component={New} />
      <Route path="/show" component={Show} />
      <Route path="/ask" component={Ask} />
      <Route path="/jobs" component={Jobs} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
