  
import { React } from 'react';
import PropTypes from 'prop-types';

const Search = ({ userName, onUserChange, onUserSubmit }) => {
  <form onSubmit={onUserSubmit}>
    <input 
      type="text" 
      name="userName" 
      value={userName} 
      onChange={onUserChange} />
    <button 
      name="search"
      value="search"
      onClick={onUserSubmit}
    >Search
    </button>
  </form>;
 
};

Search.propTypes = {
  userName: PropTypes.string.isRequired,
  onUserChange: PropTypes.func.isRequired,
  onUserSubmit: PropTypes.func.isRequired
};

export default Search;
