import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBDeIhQoJpHLS4uepWszXeZE0z2fna8z2k",
  authDomain: "where-s-whaldo.firebaseapp.com",
  databaseURL: "https://where-s-whaldo.firebaseio.com",
  projectId: "where-s-whaldo",
  storageBucket: "where-s-whaldo.appspot.com",
  messagingSenderId: "757702852384",
  appId: "1:757702852384:web:4b77e37832f1b9ab852145",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const updateHighScore = (num, id) => {
  if (!isNaN(num)) {
    id = id === "" ? "Jhon" : id;
    db.ref("highscore/" + id).update(
      {
        highscore: num,
        name: id,
      },
      function (error) {
        if (error) {
          console.log(error + "\nhere");
        }
      }
    );
  }
};

const getData = async (num) => {
  if (isNaN(num)) return false;

  const data = await db
    .ref("imgs/")
    .once("value")
    .then((snapshot) => {
      return snapshot.val() === null ? {} : snapshot.val();
    })
    .catch((err) => {
      console.log(err);
      return "";
    });
  return data;
};

// not tested needs to be mocked because data is
// always different and bigger every time
const getHighScore = async () => {
  let dataHS = await db
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
  return dataHS;
};

export default {
  getData,
  getHighScore,
  updateHighScore,
  db: firebase.database(),
  app: firebase.app(),
};
