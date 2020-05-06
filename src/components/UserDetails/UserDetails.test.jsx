import React from 'react';
import { shallow } from 'enzyme';
import UserDetails from './UserDetails';

describe('User Details', () => {
  it('renders user details', () => {
    const repos = [

    ];
    const wrapper = shallow(<UserDetails
      login="thisisjoshford"
      followers={10}
      following={10}
      html_url="https://github.com/thisisjoshford"
      repos={} 
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
