import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('should render correctly', () => {
    const component = shallow(<NotFound />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
