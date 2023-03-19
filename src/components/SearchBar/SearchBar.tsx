import React, { Component } from 'react';
import './SearchBar.scss';
import Input from '../Input';
import Button from '../Button';

interface SearchBarState {
  inputValue: string;
}

class SearchBar extends React.Component<Record<string, never>, SearchBarState> {
  state: SearchBarState = {
    inputValue: localStorage.getItem('inputValue') || '',
  };

  componentWillUnmount() {
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  handleInputChange = (inputValue: string) => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <div className="search-bar">
        <Input
          value={this.state.inputValue}
          placeholder="Search property"
          onChange={this.handleInputChange}
        />
        <Button>Find Now</Button>
      </div>
    );
  }
}

export default SearchBar;
