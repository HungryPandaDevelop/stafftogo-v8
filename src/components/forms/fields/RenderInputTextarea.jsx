import { Field } from 'redux-form';

const TempateInputTextarea = (props) => {

  const { input, placeholder, label, labelSecond, maxLength, errorOn, meta: { touched, error } } = props;

  return (
    <div className="form-line">
      {label && <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      <textarea
        {...input}
        placeholder={placeholder}
        className={`input-decorate ${errorOn && touched && error && 'error-input'}`}
        maxLength={maxLength}
      >
      </textarea>
      {errorOn && touched && error && <span className='error-hint'>{error}</span>}

    </div>
  );
}

const RenderInputTextarea = ({ name, placeholder, label, validate, errorOn }) => {
  return <Field
    name={name}
    label={label}
    placeholder={placeholder}
    component={TempateInputTextarea}
    validate={validate}
    errorOn={errorOn}
  />;
}

export default RenderInputTextarea;