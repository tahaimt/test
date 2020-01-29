// testing with react test renderer
import React from 'react';
import { PrimeItem } from "../../../components/primeItem";
import renderer from 'react-test-renderer';
import { createShallow } from "@material-ui/core/test-utils";

test('PrimeItem should match snapshot', () => {
  let number = 123;
  const component = renderer.create(
    <PrimeItem classes={{ wrapper: "container" }} number={number}></PrimeItem>,
  );
  const componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
});

test('PrimeItem should be defined', () => {
  let shallow = createShallow();
  const wrapper = shallow(
    <PrimeItem classes={{ wrapper: "wrapper" }}></PrimeItem>
  );
  expect(wrapper).toBeDefined();
});

test('PrimeItem shows correct number', () => {
  let number = 123;
  const component = renderer.create(
    <PrimeItem classes={{ wrapper: "container" }} number={number}></PrimeItem>,
  );
  const componentTree = component.toJSON();
  const textContainer = componentTree.children[0].children[0];
  expect(parseInt(textContainer.children[0])).toEqual(number);
});