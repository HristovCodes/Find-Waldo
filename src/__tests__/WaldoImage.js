import React from "react";
import WaldoImage from "../components/WaldoImage";
import { shallow, mount, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("WaldoImage: Waldo image contains a link", () => {
  const wrapper = mount(<WaldoImage />);
  expect(wrapper.prop("src")).not.toEqual("");
  wrapper.unmount();
});

test("WaldoImage: GetImage sets the state correctly", async () => {
  const wrapper = mount(<WaldoImage />);
  await wrapper.instance().getImage(0);
  expect(wrapper.state("link")).toEqual(
    "https://i.pinimg.com/originals/16/dc/04/16dc04bd415ac204e6f774a0b1814590.jpg"
  );
  wrapper.unmount();
});

test("WaldoImage: GetImage doesn't change state if the params are wrong", async () => {
  const wrapper = mount(<WaldoImage />);
  wrapper.setState({ link: "testing" });
  await wrapper.instance().getImage("string");
  expect(wrapper.state("link")).toEqual("testing");
  wrapper.unmount();
});
