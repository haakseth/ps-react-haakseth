import React from 'react';
import TextInputCSSModules from 'react-components/TextInputCSSModules';

/** Text input with error essage */
export default function ExampleTextInputError() {
  return (
    <TextInputCSSModules
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={e => {
        console.log(e.target.value);
      }}
      error="First name is required"
    />
  );
}
