import { h, render, Component } from "preact";

class App extends Component {
  constructor() {
    super();

    this.state = {
      time: Date.now()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render(props, { time }) {
    const localTime = new Date(time).toLocaleString();

    return <span>{localTime}</span>;
  }
}

render(
  <App />,
  document.getElementById("app")
);
