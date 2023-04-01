import React, { Component, createRef, FC, FormEvent, useRef, useState } from 'react';
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

const Form: FC<FormProps> = ({ addFormData }) => {
  const [formState, setFormState] = useState<FormState>({
    nameError: null,
    cityError: null,
    fileError: null,
    dateError: null,
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const checkRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const checkFields = (name: string, date: string, city: string, file: string): boolean => {
    const nameError = validateText(name, 2) ? null : 'name cannot be shorter than 2 letters!';
    const cityError = validateText(city, 0) ? null : 'chose city!';
    const dateError = validateText(date, 0) ? null : 'pick date!';
    const fileError = validateImg(file) ? null : 'chose image, Only jpeg, png, gif, svg formats!';
    setFormState({ nameError, cityError, dateError, fileError });
    return nameError === null && cityError === null && dateError === null && fileError === null;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || '';
    const date = dateRef.current?.value || '';
    const gender = maleRef.current?.checked ? 'male' : 'female';
    const city = cityRef.current?.value || '';
    const fileName = fileRef.current?.files?.[0] ? fileRef.current?.files?.[0].name : '';
    const agree = checkRef.current?.checked || false;

    const isValid = checkFields(name, date, city, fileName);
    if (!isValid) return;

    const data = {
      name,
      date,
      gender,
      city,
      file: fileRef.current?.files?.[0] ? URL.createObjectURL(fileRef.current?.files?.[0]) : '',
      agree,
    };

    addFormData(data);
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} className="form" onSubmit={handleSubmit}>
      <input placeholder="Name" ref={nameRef} />
      {formState.nameError && <div className="form__error">{formState.nameError}</div>}
      <input type="date" ref={dateRef} />
      {formState.dateError && <div className="form__error">{formState.dateError}</div>}
      <label>
        subscribe
        <CheckBox onChange={() => {}} ref={checkRef} />
      </label>
      <div className="form-gender">
        <p>gender:</p>
        <input type="radio" id="male" name="gender" value="male" ref={maleRef} defaultChecked />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" ref={femaleRef} />
        <label htmlFor="female">female</label>
      </div>
      <select
        defaultValue=""
        name="inputSelect"
        id="city"
        className="form__input-select"
        ref={cityRef}
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
      {formState.cityError && <div className="form__error">{formState.cityError}</div>}
      <input type="file" ref={fileRef} />
      {formState.fileError && <div className="form__error">{formState.fileError}</div>}
      <Button type="submit">submit</Button>
    </form>
  );
};

export default Form;
