import React, { ChangeEvent, Component, createRef, FormEvent } from 'react';
import './Form.scss';
import CheckBox from '../CheckBox';

import { Option } from '../Select/Select';
import Button from '../Button';

const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

type FormState = {
  nameError: boolean;
  cityError: boolean;
  fileError: boolean;
  dateError: boolean;
};
type FormProps = {
  addFormData: (data: personalCardProps) => void;
};
export type personalCardProps = {
  name: string;
  date: string;
  gender: string;
  city: string;
  agree: boolean;
  file: Blob;
};

class Form extends Component<FormProps, FormState> {
  state: FormState = {
    nameError: false,
    cityError: false,
    fileError: false,
    dateError: false,
  };
  nameRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  maleRef = createRef<HTMLInputElement>();
  checkRef = createRef<HTMLInputElement>();
  femaleRef = createRef<HTMLInputElement>();
  cityRef = createRef<HTMLSelectElement>();
  fileRef = createRef<HTMLInputElement>();

  handleSubmit = (e: FormEvent) => {
    const { addFormData } = this.props;
    e.preventDefault();
    const data = {
      name: this.nameRef.current?.value || '',
      date: this.dateRef.current?.value || '',
      gender: (this.maleRef.current?.value || this.femaleRef.current?.value) as string,
      city: this.cityRef.current?.value || '',
      file: this.fileRef.current?.files?.[0] as Blob,
      agree: this.checkRef.current?.checked || false,
    };
    addFormData(data);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input placeholder="Name" ref={this.nameRef} />
        <input type="date" ref={this.dateRef} />
        <label>
          Сошласие на обработку данных
          <CheckBox onChange={() => {}} ref={this.checkRef} />
        </label>
        <div className="form-gender">
          <p>gender:</p>
          <input type="radio" id="male" name="gender" value="male" ref={this.maleRef} />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" ref={this.femaleRef} />
          <label htmlFor="female">female</label>
        </div>
        <select name="inputSelect" id="city" className="form__input-select" ref={this.cityRef}>
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Красноярск">Красноярск</option>
          <option value="Сочи">Сочи</option>
          <option value="Новосибирск">Новосибирск</option>
        </select>
        <input type="file" ref={this.fileRef} />
        <Button type="submit">submit</Button>
      </form>
    );
  }
}

export default Form;
