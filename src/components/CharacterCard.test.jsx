import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CharacterCard from './CharacterCard';

describe('<CharacterCard />', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      character: {
        name: 'thomas',
        nickname: 'tom',
        img: 'profile_pic',
        portrayed: 'himself',
        category: 'person',
        status: 'alive',
        occupation: '{"software engineer","podcast host"}',
      },
    };
  });

  it('should render correctly', () => {
    const component = shallow(<CharacterCard {...defaultProps} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
