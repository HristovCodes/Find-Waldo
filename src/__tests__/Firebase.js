import React from "react";
import Firebase from "../Firebase";

test("Firebase: Firebase initialized", () => {
  const fb = Firebase;
  expect(fb.app).not.toBe(null);
});

test("Firebase: Database is not empty", () => {
  const fb = Firebase;
  expect(fb.db).not.toBe(null);
});

test("Firebase: UpdateHighScore updates the score of the user", async () => {
  const hs = 500;
  Firebase.updateHighScore(hs, "testing");
  const data = await Firebase.db
    .ref("highscore/testing")
    .once("value")
    .then((snapshot) => {
      return snapshot.val() === null ? {} : snapshot.val();
    });
  expect(data.highscore).toEqual(hs);
});

test("Firebase: GetData pulls correct data", async () => {
  const data = await Firebase.getData(0);
  expect(data).toEqual({
    coords: [
      {
        x: 1267,
        y: 86,
      },
      {
        x: 782,
        y: 887,
      },
      {
        x: 1400,
        y: 469,
      },
    ],
    links: [
      "https://static.techspot.com/images2/news/bigimage/2018/08/2018-08-13-image-14.jpg",
      "https://2.bp.blogspot.com/-8hB73_LeEe0/UgFyI3AYF4I/AAAAAAAABKs/JdJbzC8sEXY/s1600/1115977_10151854003328060_363126350_o.jpg",
      "https://cdn.thearthunters.com/wp-content/uploads/2012/10/190.jpg",
    ],
  });
});

test("Firebase: GetData doesn't pull if incorrect params", async () => {
  const data = await Firebase.getData("invalid");
  expect(data).toEqual(false);
});
