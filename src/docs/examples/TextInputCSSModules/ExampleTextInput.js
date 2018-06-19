import React from 'react';
import TextInputCSSModules from 'ps-react/TextInputCSSModules';

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
