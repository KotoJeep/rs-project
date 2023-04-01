import React, { Component, FC, useState } from 'react';
import Form from '../../components/Form';
import CardPersonal, { personalCardProps } from '../../components/CardPersonal';

const FormPage: FC = () => {
  const [cards, setCards] = useState<personalCardProps[]>([]);

  const addFormData = (data: personalCardProps) => {
    setCards([...cards, data]);
  };

  return (
    <div data-testid="form-page">
      <Form addFormData={addFormData} />
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
