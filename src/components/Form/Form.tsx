import React, { Component, createRef, FormEvent } from 'react';
import './Form.scss';
import CheckBox from '../CheckBox';

import Button from '../Button';
import { personalCardProps } from '../CardPersonal';
import { validateText, validateImg } from './validation';

type FormState = {
  nameError: string | null;
  cityError: string | null;
  fileError: string | null;
  dateError: string | null;
};
type FormProps = {
  addFormData: (data: personalCardProps) => void;
};

class Form extends Component<FormProps, FormState> {
  state: FormState = {
    nameError: null,
    cityError: null,
    fileError: null,
    dateError: null,
  };
  nameRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  maleRef = createRef<HTMLInputElement>();
  checkRef = createRef<HTMLInputElement>();
  femaleRef = createRef<HTMLInputElement>();
  cityRef = createRef<HTMLSelectElement>();
  fileRef = createRef<HTMLInputElement>();
  formRef = createRef<HTMLFormElement>();

  checkFields = (name: string, date: string, city: string, file: string): boolean => {
    const nameError = validateText(name, 2) ? null : 'name cannot be shorter than 2 letters!';
    const cityError = validateText(city, 0) ? null : 'chose city!';
    const dateError = validateText(date, 0) ? null : 'pick date!';
    const fileError = validateImg(file) ? null : 'chose image, Only jpeg, png, gif, svg formats!';
    this.setState({ nameError, cityError, dateError, fileError });
    return nameError === null && cityError === null && dateError === null && fileError === null;
  };

  handleSubmit = (e: FormEvent) => {
    const { addFormData } = this.props;
    e.preventDefault();
    const name = this.nameRef.current?.value || '';
    const date = this.dateRef.current?.value || '';
    const gender = (this.maleRef.current?.value || this.femaleRef.current?.value) as string;
    const city = this.cityRef.current?.value || '';
    const fileName = this.fileRef.current?.files?.[0] ? this.fileRef.current?.files?.[0].name : '';
    const agree = this.checkRef.current?.checked || false;

    const isValid = this.checkFields(name, date, city, fileName);
    if (!isValid) return;

    const data = {
      name,
      date,
      gender,
      city,
      file: this.fileRef.current?.files?.[0]
        ? URL.createObjectURL(this.fileRef.current?.files?.[0])
        : '',
      agree,
    };

    addFormData(data);
    this.formRef.current?.reset();
  };

  render() {
    const { nameError, cityError, dateError, fileError } = this.state;
    return (
      <form ref={this.formRef} className="form" onSubmit={this.handleSubmit}>
        <input placeholder="Name" ref={this.nameRef} />
        {nameError && <div className="form__error">{nameError}</div>}
        <input type="date" ref={this.dateRef} />
        {dateError && <div className="form__error">{dateError}</div>}
        <label>
          subscribe
          <CheckBox onChange={() => {}} ref={this.checkRef} />
        </label>
        <div className="form-gender">
          <p>gender:</p>
          <input type="radio" id="male" name="gender" value="male" ref={this.maleRef} />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" ref={this.femaleRef} />
          <label htmlFor="female">female</label>
        </div>
        <select
          defaultValue=""
          name="inputSelect"
          id="city"
          className="form__input-select"
          ref={this.cityRef}
        >
          <option value="" disabled>
            Выберете город
          </option>
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Красноярск">Красноярск</option>
          <option value="Сочи">Сочи</option>
          <option value="Новосибирск">Новосибирск</option>
        </select>
        {cityError && <div className="form__error">{cityError}</div>}
        <input type="file" ref={this.fileRef} />
        {fileError && <div className="form__error">{fileError}</div>}
        <Button type="submit">submit</Button>
      </form>
    );
  }
}

export default Form;
