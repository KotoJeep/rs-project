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
    console.log(data);
    this.setState({ cards: [...this.state.cards, data] });
  };

  render() {
    return (
      <>
        <h1 style={{ color: 'red' }}>
          Please postpone the review of my work until Wednesday, I did not have time to finish
          everything (there are not enough tests, validation and styles yet)
        </h1>
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
      </>
    );
  }
}

export default FormPage;
