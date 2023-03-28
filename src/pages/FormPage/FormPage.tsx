import React, { Component } from 'react';
import Form from '../../components/Form';
import CardPersonal, { personalCardProps } from '../../components/CardPersonal';

type FormProps = {
  cards: personalCardProps[];
};

class FormPage extends Component<unknown, FormProps> {
  state: FormProps = {
    cards: [],
  };

  addFormData = (data: personalCardProps) => {
    this.setState({ cards: [...this.state.cards, data] });
  };

  render() {
    return (
      <div data-testid="form-page">
        <Form addFormData={this.addFormData} />
        <div className="card-wrapper">
          {this.state.cards.map(({ name, date, gender, agree, city, file }, idx) => {
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
  }
}

export default FormPage;
