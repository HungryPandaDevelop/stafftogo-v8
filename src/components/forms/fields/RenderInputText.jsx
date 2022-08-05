import { Field } from 'redux-form';


const TempateInputText = (props) => {

  const { input, placeholder, label, labelSecond, disabled, errorOn, meta: { touched, error } } = props;

  return (
    <div className="form-line">
      {label && <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      <input
        {...input}
        type="text"
        placeholder={placeholder}
        className={`input-decorate ${errorOn && touched && error && 'error-input'}`}
        disabled={`${disabled === 0 ? "disabled" : ""}`}
      />
      {errorOn && touched && error && <span className='error-hint'>{error}</span>}

    </div>
  );
}



const RenderInputText = ({ name, placeholder, label, validate, errorOn }) => {
  return <Field
    name={name}
    label={label}
    placeholder={placeholder}
    component={TempateInputText}
    validate={validate}
    errorOn={errorOn}
  />;
}

export default RenderInputText;