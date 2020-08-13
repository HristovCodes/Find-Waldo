import React from "react";
import Firebase from "../Firebase";
import "../css/Highscores.scss";

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

  updateHS(n) {
    return this.state.data.length > 0
      ? Object.values(this.state.data[n])
          .sort((a, b) => a.highscore - b.highscore)
          .map((user) => {
            if (user.name === this.props.user)
              return (
                <p className="You" key={user.name + user.highscore}>
                  {user.name}: {user.highscore}
                </p>
              );
            return (
              <p key={user.name + user.highscore}>
                {user.name}: <span>{user.highscore}</span>
              </p>
            );
          })
      : "Loading";
  }

  render() {
    return (
      <div className="Highscores">
        <h1>Highscores</h1>
        <div className="Rows">
          <div className="Row">
            <h2>Easy</h2>
            {this.updateHS(0)}
          </div>
          <div className="Row">
            <h2>Medium</h2>
            {this.updateHS(1)}
          </div>
          <div className="Row">
            <h2>Hard</h2>
            {this.updateHS(2)}
          </div>
        </div>
      </div>
    );
  }
}
