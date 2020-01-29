// testing with enzyme
import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
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

  it("should fire click event as many times as clicked", () => {
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
    wrapper.update();
    const button = wrapper.find('.click-button');
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
    expect(mockCallBack).toHaveBeenCalledTimes(1);
    button.simulate('click');
    button.simulate('click');
    expect(mockCallBack).toHaveBeenCalledTimes(3);
  });

  it("should NOT show a loader on loading button with loading = false", () => {
    const wrapper = shallow(
      <PrimeButton
        classes={{ wrapper: "container" }}
        loading={false}
        className="click-button"
      >
        Loading Button
      </PrimeButton>
    );
    wrapper.update();
    const container = wrapper.find('.container');
    expect(container.children()).toHaveLength(1);
  });

  it("should show a loader on loading button with loading = true", () => {
    const wrapper = shallow(
      <PrimeButton
        classes={{ wrapper: "container" }}
        loading={true}
        className="click-button"
      >
        Loading Button
      </PrimeButton>
    );
    wrapper.update();
    const container = wrapper.find('.container');
    expect(container.children()).toHaveLength(2);
    const circleContainer = container.children().at(1);
    expect(circleContainer.html()).toEqual('<div class="MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate" style="width:24px;height:24px" role="progressbar"><svg class="MuiCircularProgress-svg" viewBox="22 22 44 44"><circle class="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle></svg></div>');
  });
});
