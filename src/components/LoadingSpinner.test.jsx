import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoadingSpinner from './LoadingSpinner';

describe('<LoadingSpinner />', () => {
  it('should render correctly', () => {
    const component = shallow(<LoadingSpinner />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
