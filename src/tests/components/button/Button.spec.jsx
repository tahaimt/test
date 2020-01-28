import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { createShallow } from "@material-ui/core/test-utils";
import { ThemeProvider } from "@material-ui/core/styles";
import { PrimeButton } from "../../../components/button";

describe("<PrimeButton />", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should be defined", () => {
    const wrapper = shallow(
      <PrimeButton classes={{ wrapper: "wrapper" }}>Button</PrimeButton>
    );
    expect(wrapper).toBeDefined();
  });

  it('should have wrapper CSS class "container"', () => {
    const wrapper = shallow(
      <PrimeButton classes={{ wrapper: "container" }}>Button</PrimeButton>
    );
    expect(wrapper.find(".container")).toHaveLength(1);
  });

  it("should be call click callback", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <PrimeButton
        classes={{ wrapper: "container" }}
        loading={false}
        className="click-button"
        onClick={mockCallBack}
      >
        Loading Button
      </PrimeButton>
    );
    const button = wrapper.find('.click-button');
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
    expect(mockCallBack).toHaveBeenCalledTimes(1);
    button.simulate('click');
    button.simulate('click');
    expect(mockCallBack).toHaveBeenCalledTimes(3);
  });
});
