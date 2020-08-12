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
