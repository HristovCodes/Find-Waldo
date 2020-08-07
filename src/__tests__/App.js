import React from "react";
import App from "../App";
import { render } from "@testing-library/react";

test("App: Renders Waldo image", () => {
  const { getByAltText } = render(<App />);
  const imgElement = getByAltText(/waldo/i);
  expect(imgElement).toBeInTheDocument();
});

test("App: Waldo image contains a link", () => {
  const { getByAltText } = render(<App />);
  const imgElement = getByAltText(/waldo/i);
  const imgSrc = imgElement.getAttribute("src");
  expect(imgSrc).not.toBe("");
});

it("Firebase: Image is pulled from DB", async () => {
  expect.assertions(1);
  await expect(App.getImage(0).resolves.toBeTruthy());
});
