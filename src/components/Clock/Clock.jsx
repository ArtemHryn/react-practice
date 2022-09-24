import { Component } from 'react';
import './Clock.scss';

export class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  intervalID = null;

  componentDidMount() {
    this.intervalID = setInterval(() =>
      this.setState({ time: new Date().toLocaleTimeString() })
    );
  }

    componentWillUnmount() {
      clearInterval(this.intervalID);
  }
  render() {
    return <div className="Clock__face">{this.state.time}</div>;
  }
}
