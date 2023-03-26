import React, { Component, useState } from 'react';
import './Form.scss';
import Input from '../Input';
import CheckBox from '../CheckBox';
import MultiDropdown from '../Select';
import Select from '../Select';
import { Option } from '../Select/Select';

const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Form = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelectChange = (option: Option) => {
    setSelectedOption(option);
  };
  return (
    <form className="form">
      <Input onChange={() => {}} placeholder="Name" />
      <label>
        Сошласие на обработку данных
        <CheckBox onChange={() => {}} />
      </label>

      <Select options={options} value={selectedOption} onChange={handleSelectChange} />
    </form>
  );
};

export default Form;
