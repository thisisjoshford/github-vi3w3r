import React from 'react';
import { shallow } from 'enzyme';
import UserDetails from './UserDetails';

describe('User Details', () => {
  it('renders user details', () => {
    const repos = [
      {
        html_url: 'https://github.com/thisisjoshford/about-me',
        id: 233724246,
        name: 'about-me'

      },
      {
        html_url: 'https://github.com/thisisjoshford/artist-search',
        id: 261284340,
        name: 'artist-search'
      }
    ];

    const wrapper = shallow(<UserDetails
      login="thisisjoshford"
      followers={10}
      following={10}
      html_url="https://github.com/thisisjoshford"
      repos={repos} 
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
