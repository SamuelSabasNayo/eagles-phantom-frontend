import React from 'react';

const TextFieldGroup = ({ field, value, label, error, type, onChange}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={field}
      />
    {error && <span>{error}</span>}
    </div>  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;