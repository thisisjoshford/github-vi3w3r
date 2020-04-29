import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ login, followers, following, html_url }) => (
  <>
    <h2>User: { login }</h2>
    <li>Followers: { followers }</li>
    <li>Following: { following }</li>
    <a href={ html_url}>LINK</a>
  </>
);

UserDetails.propTypes = {
  login: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired
};

export default UserDetails;
