// SearchBar.jsx
import React from 'react';
import classes from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={classes.searchContainer}>
      <input 
        type="text" 
        placeholder="Search..." 
        className={classes.searchInput}
      />
      <button className={classes.searchButton}>
        🔍
      </button>
    </div>
  );
}
