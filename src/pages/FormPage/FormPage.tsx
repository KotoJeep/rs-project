import React from 'react';
import Form from '../../components/Form';
import { personalCardProps } from '../../components/Form/Form';

const FormPage = () => {
  const addFormData = (data: personalCardProps) => {
    console.log(data);
  };
  return <Form addFormData={addFormData} />;
};

export default FormPage;
