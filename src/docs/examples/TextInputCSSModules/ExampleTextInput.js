import React from 'react';
import TextInputCSSModules from 'react-components/TextInputCSSModules';

/** Text input */
export default function ExampleTextInput() {
  return (
    <TextInputCSSModules
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={e => {
        console.log(e.target.value);
      }}
    />
  );
}
