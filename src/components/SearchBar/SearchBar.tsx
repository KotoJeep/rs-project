import React from 'react';
import './SearchBar.scss';
import Input from '../Input';
import Button from '../Button';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <Input
        placeholder="Search property"
        onChange={(value) => {
          console.log(value);
        }}
      />
      <Button>Find Now</Button>
    </div>
  );
};

export default SearchBar;
