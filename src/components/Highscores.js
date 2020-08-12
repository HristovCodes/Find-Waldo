import React from "react";
import Firebase from "../Firebase";

export default class Highscores extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      data: [],
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getHighScores(this.props.img);
  }

  getHighScores() {
    const data = Firebase.getHighScore();
    data
      .then(
        (res) => {
          this._isMounted &&
            this.setState({
              data: res,
            });
        },
        (e) => {}
      )
      .catch((e) => {});
  }

  render() {
    return <div></div>;
  }
}
