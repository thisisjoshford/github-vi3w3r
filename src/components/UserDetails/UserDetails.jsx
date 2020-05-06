import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ login, followers, following, html_url, repos }) => {
  console.log(repos);
  const repoItems = repos.map((repo) => (
    <li key={repo.id}><a href={repo.url}>{repo.name}</a></li>
));

  return (
    <>
      <h2>User: { login }</h2>
      <li>Followers: { followers }</li>
      <li>Following: { following }</li>
      <a href={html_url}>LINK</a>
      {repoItems}
    </>
  );
};

UserDetails.propTypes = {
  login: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired
};

export default UserDetails;
