import "./css/reset.css";
import React from "react";
import WaldoImage from "./components/WaldoImage";
import Highscores from "./components/Highscores";
import Firebase from "./Firebase";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      game: false,
      found: false,
      start: 0,
      time: Number.MAX_SAFE_INTEGER,
      username: "",
    };
  }

  startGame() {
    this.setState({ game: true, start: Date.now() });
  }

  handleClick() {
    const diff = Date.now() - this.state.start;
    if (diff < this.state.time) {
      Firebase.updateHighScore(diff, this.state.username);
    }
    this.setState({ found: true, time: diff, game: false });
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return this.state.game === true ? (
      <div className="App">
        <WaldoImage img="0" handleClick={this.handleClick}></WaldoImage>
      </div>
    ) : (
      <div className="App">
        <button onClick={this.startGame}>START</button>
        <label htmlFor="name">Username: </label>
        <input type="text" onChange={this.handleChange} name="name"></input>
        <Highscores user={this.state.username}></Highscores>
      </div>
    );
  }
}
