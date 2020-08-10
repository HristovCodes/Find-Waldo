import React from "react";
import App from "../App";
import { shallow, mount, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("App: Renders WaldoImage", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(wrapper.getElement(".waldoimage"))).toEqual(true);
});
