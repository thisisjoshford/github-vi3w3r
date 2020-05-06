import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search component', () => {
  it('renders Search', () => {
    const wrapper = shallow(<Search
      userName="thisisjoshford"
      onUserChange={() => {}}
      onUserSubmit={() => {}} 
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
