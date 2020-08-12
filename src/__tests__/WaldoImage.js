import React from "react";
import WaldoImage from "../components/WaldoImage";
import { shallow, mount, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const defState = {
  link:
    "https://static.techspot.com/images2/news/bigimage/2018/08/2018-08-13-image-14.jpg",
  coords: { x: 1267, y: 86 },
};

test("WaldoImage: GetData doesn't change state if the params are wrong", async () => {
  const wrapper = shallow(<WaldoImage />);
  wrapper.setState({ link: "testing" });
  await wrapper.instance().getData("invalid data");
  expect(wrapper.state("link")).toEqual("testing");
});

test("WaldoImage: GetData sets the state correctly", async () => {
  const wrapper = shallow(<WaldoImage />);
  await wrapper.instance().getData(0);

  expect(wrapper.state("link")).toEqual(defState.link);
  expect(wrapper.state("coords")).toEqual(defState.coords);
});

test("WaldoImage: Default state is used upon rendering", () => {
  const wrapper = shallow(<WaldoImage />);

  expect(wrapper.state("link")).toEqual(defState.link);
  expect(wrapper.state("coords")).toEqual(defState.coords);
});
