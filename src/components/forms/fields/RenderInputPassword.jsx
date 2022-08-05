import { useState, useEffect } from 'react';
import { Field } from 'redux-form';

const TemplateFieldPassword = ({ input, label, placeholder, errorOn, meta: { touched, error } }) => {

  const [showPass, setShowPass] = useState(false);


  return (
    <div className="form-line">
      <label><b>{label}</b></label>
      <div className="password-field" >
        <input
          type={showPass ? ("text") : ("password")}
          {...input}
          placeholder={placeholder}
          className={`input-decorate ${errorOn && touched && error && 'error-input'}`}
        />
        <i className="view-ico" data-visibility={showPass} onClick={() => { setShowPass((prevState) => !prevState) }}></i>
      </div>
      {errorOn && touched && error && <span className='error-hint'>{error}</span>}
    </div>
  )
}

const RenderInputPassword = ({ name, placeholder, label, errors, validate, errorOn }) => {
  return <Field
    name={name}
    label={label}
    placeholder={placeholder}
    component={TemplateFieldPassword}
    errors={errors}
    validate={validate}
    errorOn={errorOn}
  />;
}

export default RenderInputPassword;