import { Field} from 'redux-form';
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';



const TemplateCheckbox = ({ input, label }) => (
  <div className="checkbox">
    <label>
      {label}
      <input type="checkbox" {...input} />
      <span></span>
    </label>
  </div>
);

const RenderInputCheckbox = (name, label, labelSecond, variants) => {
  return (
    <>
      <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>
      <Field
        name={name}
        component={ReduxCheckbox(Checkboxes)}
        data={variants}
        itemComponent={TemplateCheckbox}
        variants={variants}
      />
    </>
  );
}

export default RenderInputCheckbox;