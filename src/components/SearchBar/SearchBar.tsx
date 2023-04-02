import React, { FC, useEffect, useState } from 'react';
import './SearchBar.scss';
import Input from '../Input';
import Button from '../Button';

const SearchBar: FC = () => {
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem('inputValue') || '');

  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

  const handleInputChange = (inputValue: string) => {
    setInputValue(inputValue);
  };

  return (
    <div className="search-bar">
      <Input value={inputValue} placeholder="Search property" onChange={handleInputChange} />
      <Button>Find Now</Button>
    </div>
  );
};

export default SearchBar;
