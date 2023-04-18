import React, { FC, FormEvent, useState } from 'react';
import './SearchBar.scss';
import Input from '../Input';
import Button from '../Button';
import { useAppDispatch } from '../../hooks/hooks';
import { setSearchQuery } from '../../store/formSlice';

type SearchBarProps = {
  searchQuery: string;
};

const SearchBar: FC<SearchBarProps> = ({ searchQuery }) => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>(searchQuery);

  const handleInputChange = (inputValue: string) => {
    setInputValue(inputValue);
  };
  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchQuery(inputValue));
  };
  return (
    <form className="search-bar" onSubmit={onSubmitForm}>
      <Input value={inputValue} placeholder="Search property" onChange={handleInputChange} />
      <Button type="submit">Find Now</Button>
    </form>
  );
};

export default SearchBar;
