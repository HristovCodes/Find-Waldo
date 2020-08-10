import React from "react";
import WaldoImage from "../components/WaldoImage";
import { shallow, mount, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("WaldoImage: GetData doesn't change state if the params are wrong", async () => {
  const wrapper = shallow(<WaldoImage />);
  wrapper.setState({ link: "testing" });
  await wrapper.instance().getData("string");
  expect(wrapper.state("link")).toEqual("testing");
});

test("WaldoImage: Clicking on waldo changes state to found", () => {
  const wrapper = mount(<WaldoImage img="0" />);
  wrapper.setState({ found: false });
  wrapper.find("#target").simulate("click");
  expect(wrapper.state("found")).toBe(true);
  wrapper.unmount();
});

test("WaldoImage: GetData sets the state correctly", async () => {
  const wrapper = shallow(<WaldoImage />);
  await wrapper.instance().getData(0);
  expect(wrapper.state("link")).toEqual(
    "https://static.techspot.com/images2/news/bigimage/2018/08/2018-08-13-image-14.jpg"
  );
  expect(wrapper.state("coords")).toEqual({ x: 1267, y: 86 });
});
