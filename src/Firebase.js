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

/* Upload image links to db
db.ref("imgs/").update({
    links: [
      "https://i.pinimg.com/originals/16/dc/04/16dc04bd415ac204e6f774a0b1814590.jpg",
      "https://i.pinimg.com/originals/ca/13/77/ca137724b13467ac80f2c657d8782031.jpg",
      "https://i.pinimg.com/originals/df/7c/42/df7c42f19c6ff4b97b679ffabfba5ebe.jpg",
    ],
  });
*/

export default { db: firebase.database(), app: firebase.app() };
