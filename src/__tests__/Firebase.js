import React from "react";
import Firebase from "./Firebase";

test("Firebase: Firebase initialized", () => {
  const fb = Firebase;
  expect(fb.app).not.toBe(null);
});

test("Firebase: Database is not empty", () => {
  const fb = Firebase;
  expect(fb.db).not.toBe(null);
});
