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
    "https://static.techspot.com/images2/news/bigimage/2018/08/2018-08-13-image-14.jpg",
    "https://2.bp.blogspot.com/-8hB73_LeEe0/UgFyI3AYF4I/AAAAAAAABKs/JdJbzC8sEXY/s1600/1115977_10151854003328060_363126350_o.jpg",
    "https://cdn.thearthunters.com/wp-content/uploads/2012/10/190.jpg",
  ],
  coords: [
    { x: 1267, y: 86 },
    { x: 782, y: 887 },
    { x: 1400, y: 469 },
  ],
});
*/

export default { db: firebase.database(), app: firebase.app() };
