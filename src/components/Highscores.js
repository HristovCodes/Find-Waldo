import React from "react";
import Firebase from "../Firebase";

export default class Highscores extends React.Component {
  async getHighScores() {
    let dataHS = await Firebase.db
      .ref("highscore/")
      .once("value")
      .then((snapshot) => {
        return snapshot.val() === null ? {} : snapshot.val();
      })
      .catch((err) => {
        console.log(err);
        return "";
      });

    dataHS = Object.values(dataHS);
  }
  render() {
    return <div></div>;
  }
}
