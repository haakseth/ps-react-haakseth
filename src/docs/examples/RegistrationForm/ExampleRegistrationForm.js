import React from 'react';
import RegistrationForm from 'ps-react/RegistrationForm';

/** RegistrationForm */
class ExampleRegistrationForm extends React.Component {
  onSubmit = user => {
    console.log(user);
  };

  render() {
    return <RegistrationForm onSubmit={this.onSubmit} />;
  }
}
export default ExampleRegistrationForm;
