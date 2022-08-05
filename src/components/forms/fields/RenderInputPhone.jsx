import { Field } from 'redux-form';

import { createTextMask } from 'redux-form-input-masks';

const phoneMask = createTextMask({
  pattern: '+7 (999) 999-9999',
});
const RenderInputPhone = ({ name, placeholder, label, labelSecond, disabled }) => {
  return (
    <div className="form-line">
      <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>

      <Field
        name={name}
        type="text"
        placeholder={placeholder}
        component="input"
        className="input-decorate"
        disabled={`${disabled === 0 ? "disabled" : ""}`}
        {...phoneMask}

      />
    </div>
  );
}

export default RenderInputPhone;