import React from "react";
class Myclock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mydate: new Date()
    };
  }
  componentDidMount() {
    setInterval(() => this.changeDate(), 1000);
  }
  //ComponentWillUnmount() {}
  changeDate() {
    this.setState({ mydate: new Date() });
  }
  render() {
    return <p>current time:{this.state.mydate.toLocaleTimeString()}</p>;
  }
}
export default Myclock;
