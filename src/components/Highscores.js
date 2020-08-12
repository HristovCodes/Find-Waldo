import React from "react";
import Firebase from "../Firebase";

export default class Highscores extends React.Component {
  constructor(props) {
    super(props);
    this.getHighScores = this.getHighScores.bind(this);
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
    this._isMounted && this.getHighScores();
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

  updateHS() {
    return this.state.data
      .sort((a, b) => a.highscore - b.highscore)
      .map((user) => {
        return (
          <p key={user.name + user.highscore}>
            {user.name}: {user.highscore}
          </p>
        );
      });
  }

  render() {
    return (
      <div className="Highscores">
        <h1>Highscores</h1>
        <div>{this.updateHS()}</div>
      </div>
    );
  }
}
