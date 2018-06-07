import React from 'react';
import PropTypes from 'prop-types';

function Label({ htmlFor, label, required }) {
  return (
    <label style={{ display: 'block' }} htmlFor={htmlFor}>
      {label} {required && <span style={{ color: 'red' }}> *</span>}
    </label>
  );
}

Label.propTypes = {
  /** Id of html element label belongs to */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Whether field is required */
  required: PropTypes.bool
};

// Label.defaultProps = {
//   height: 5
// };

export default Label;
