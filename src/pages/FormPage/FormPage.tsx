import React, { FC } from 'react';
import Form from '../../components/Form';
import CardPersonal from '../../components/CardPersonal';
import { useAppSelector } from '../../hooks/hooks';

const FormPage: FC = () => {
  const { personalCards: cards } = useAppSelector((state) => state.formSlice);

  return (
    <div data-testid="form-page">
      <Form />
      <div className="card-wrapper">
        {cards.map(({ name, date, gender, agree, city, file }, idx) => {
          return (
            <CardPersonal
              key={idx}
              name={name}
              date={date}
              gender={gender}
              city={city}
              agree={agree}
              file={file}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FormPage;
