import React, { FC, useEffect, useState } from 'react';
import './Form.scss';
import CheckBox from '../CheckBox';

import Button from '../Button';

import { useForm } from 'react-hook-form';
import { FormInputs } from '../CardPersonal';

type FormProps = {
  addFormData: (data: FormInputs) => void;
};

type formState = {
  name: string;
  date: string;
  gender: string;
  city: string;
  file: FileList;
  agree: boolean;
};

const Form: FC<FormProps> = ({ addFormData }) => {
  const [created, setCreated] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<formState>({
    reValidateMode: 'onSubmit',
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  const onSubmit = handleSubmit((data: formState) => {
    addFormData({
      ...data,
      file: URL.createObjectURL(data.file[0]),
    });
    setCreated(true);
  });

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <form className="form" onSubmit={onSubmit} data-testid="form">
        <input
          placeholder="Name"
          {...register('name', {
            required: 'This is a required field!',
            minLength: {
              value: 2,
              message: 'The name cannot be shorter than 2 letters!',
            },
          })}
        />
        {errors.name && <div className="form__error">{errors.name?.message}</div>}
        <input
          type="date"
          {...register('date', {
            required: 'This is a required field!',
          })}
        />
        {errors.date && <div className="form__error">{errors.date?.message}</div>}
        <label>
          subscribe
          <CheckBox {...register('agree')} />
        </label>
        <div className="form-gender">
          <p>gender:</p>
          <input type="radio" id="male" value="male" defaultChecked {...register('gender')} />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" value="female" {...register('gender')} />
          <label htmlFor="female">female</label>
        </div>
        <select
          defaultValue=""
          id="city"
          className="form__input-select"
          {...register('city', { required: 'Pick city!' })}
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
        {errors.city && <div className="form__error">{errors.city?.message}</div>}
        <input type="file" {...register('file', { required: 'Pick file!' })} />
        {errors.file && <div className="form__error">{errors.file?.message}</div>}
        <Button type="submit">submit</Button>
      </form>
      {created && (
        <div
          className="form__confirm"
          data-tastid="button-submit"
          onClick={() => {
            setCreated(false);
          }}
        >
          Card added!
        </div>
      )}
    </>
  );
};

export default Form;
