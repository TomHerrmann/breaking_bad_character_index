import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from './Search';

describe('<Search />', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      onSearch: jest.fn(),
      searchQuery: 'test',
    };
  });

  it('should render correctly', () => {
    const component = shallow(<Search {...defaultProps} />);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should call onSearch function onChange', () => {
    const component = shallow(<Search {...defaultProps} />);
    component
      .find('input')
      .props()
      .onChange();
    expect(defaultProps.onSearch).toHaveBeenCalled();
  });
  it('should call preventDefault function onSubmit', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const component = shallow(<Search {...defaultProps} />);
    component
      .find('form')
      .props()
      .onSubmit(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
