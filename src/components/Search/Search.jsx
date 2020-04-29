import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ userName, onUserChange, onUserSubmit }) => (
  <>
    <h1>Github Viewer</h1>
    <input 
      type="text" 
      name="userName" 
      value={userName} 
      onChange={onUserChange} 
    />
    <input 
      type="submit"
      name="search"
      value="Search"
      onClick={onUserSubmit}
    />
  </>
 
);

Search.propTypes = {
  userName: PropTypes.string.isRequired,
  onUserChange: PropTypes.func.isRequired,
  onUserSubmit: PropTypes.func.isRequired
};

export default Search;
