import "./css/reset.css";
import React from "react";
import WaldoImage from "./components/WaldoImage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <WaldoImage img="0"></WaldoImage>
      </div>
    );
  }
}
