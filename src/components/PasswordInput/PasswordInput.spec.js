import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import { shallow } from 'enzyme';

test('toggles input type when show/hide password clicker', () => {
  const wrapper = shallow(
    <PasswordInput
      htmlId="test"
      name="test"
      onChange={() => {}}
      value=""
      showVisibilityToggle
    />
  );

  //password input should be of type password initially
  expect(wrapper.find({ type: 'password' })).toHaveLength(1);
  expect(wrapper.find({ type: 'text' })).toHaveLength(0);

  wrapper.find('a').simulate('click');
  expect(wrapper.find({ type: 'password' })).toHaveLength(0);
  expect(wrapper.find({ type: 'text' })).toHaveLength(1);
});

test('hides password quality by default', () => {
  const tree = renderer
    .create(
      <PasswordInput
        htmlId="test"
        name="test"
        onChange={() => {}}
        value="Uisi38#8iad"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
