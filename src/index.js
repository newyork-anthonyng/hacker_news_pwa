import { h, render, Component } from "preact";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LinkItem from "./components/LinkItem";
import LinkItemMetaInfo from "./components/LinkItemMetaInfo";

const Home = () => <Redirect to="/top" />
const linksArray = [0, 1, 2, 3, 4];
const Top = () => (
  <div>
    <h1>Top</h1>

    {linksArray.map((item) => (
      <LinkItem
        key={item}
        index={item}
        id={item}
        main={<span>Welcome</span>}
        footer={<LinkItemMetaInfo points={item} daysSincePost={item} author="Anthony" />}
      />
    ))}
  </div>
);
const New = () => <h1>New</h1>
const Comments = () => <h1>Comments</h1>
const Show = () => <h1>Show</h1>
const Ask = () => <h1>Ask</h1>
const Jobs = () => <h1>Jobs</h1>
const NoMatch = () => <Redirect to="/" />

const App = () => (
  <div>
    <Header />

    <hr />

    <Switch>
      <Route exact path="/" component={Top} />
      <Route path="/new" component={New} />
      <Route path="/comments" component={Comments} />
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
