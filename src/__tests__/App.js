import React from "react";
import App from "../App";
import { shallow, mount, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("App: Renders WaldoImage inside of App", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(wrapper.getElement(".waldoimage"))).toEqual(true);
});

test("App: Clicking on waldo changes state to found", () => {
  const wrapper = mount(<App />);
  wrapper.setState({ game: true });
  wrapper.find("#target").simulate("click");
  expect(wrapper.state("found")).toBe(true);
  wrapper.unmount();
});

test("App: HandleClick correctly times how long it took to find waldo", () => {
  const wrapper = mount(<App />);
  wrapper.setState({ found: false });
  setTimeout(() => {
    wrapper.find("#target").simulate("click");
    expect(wrapper.state("time")).toEqual(10);
  }, 10);
  wrapper.unmount();
});
