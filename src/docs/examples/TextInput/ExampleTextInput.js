import React from 'react';
import TextInput from 'react-components/TextInput';

/** Text input */
export default function ExampleTextInput() {
  return (
    <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={e => {
        console.log(e.target.value);
      }}
    />
  );
}
