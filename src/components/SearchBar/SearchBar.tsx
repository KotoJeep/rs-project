import React, { FC, FormEvent, useEffect, useState } from 'react';
import './SearchBar.scss';
import Input from '../Input';
import Button from '../Button';

type SearchBarProps = {
  onSubmitValue: (value: string) => void;
};
const SearchBar: FC<SearchBarProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem('inputValue') || '');

  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

  const handleInputChange = (inputValue: string) => {
    setInputValue(inputValue);
  };
  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmitValue(`products/search?q=${inputValue}`);
  };
  return (
    <form className="search-bar" onSubmit={onSubmitForm}>
      <Input value={inputValue} placeholder="Search property" onChange={handleInputChange} />
      <Button type="submit">Find Now</Button>
    </form>
  );
};

export default SearchBar;
