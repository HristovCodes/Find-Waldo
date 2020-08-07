import React from "react";
import Firebase from "./Firebase";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      currImg: "none",
    };
  }

  static async getImage(num) {
    const img = await Firebase.db
      .ref("imgs/links/" + num)
      .once("value")
      .then((snapshot) => {
        return snapshot.val() === null ? {} : snapshot.val();
      });
    this._isMounted && this.setState({ currImg: img });
    return true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted &&
      this.getImage(0).catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <img src={this.state.currImg} alt="Waldo"></img>
      </div>
    );
  }
}
