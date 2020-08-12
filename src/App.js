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
      choise: 0,
    };
  }

  startGame(num) {
    this.setState({ game: true, start: Date.now(), choice: num });
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
        <WaldoImage
          img={this.state.choice}
          handleClick={this.handleClick}
        ></WaldoImage>
      </div>
    ) : (
      <div className="App">
        <div>
          <label htmlFor="dif">Choose difficulty </label>
          <button
            name="dif"
            onClick={() => {
              this.startGame(0);
            }}
          >
            Easy
          </button>
          <button
            name="dif"
            onClick={() => {
              this.startGame(1);
            }}
          >
            Medium
          </button>
          <button
            name="dif"
            onClick={() => {
              this.startGame(2);
            }}
          >
            Hard
          </button>
        </div>
        <div>
          <label htmlFor="name">Username: </label>
          <input type="text" onChange={this.handleChange} name="name"></input>
        </div>
        <Highscores user={this.state.username}></Highscores>
      </div>
    );
  }
}
