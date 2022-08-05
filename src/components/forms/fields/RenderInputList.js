import { Field } from 'redux-form';
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';


const TemplateInputList = ({ input, label }) => (
  <div className="checkbox-second">
    <label>
      <input type="checkbox" {...input} />
      <span>{label}</span>
    </label>
  </div>
);


const RenderInputList = (name, label, labelSecond, options) => {

  return (
    <div className="form-line">
      {label && (<label><b>{label}</b><span>{labelSecond}</span></label>)}
      <div className="list-choise input-decorate">
        <Field
          name={name}
          component={ReduxCheckbox(Checkboxes)}
          data={options}
          itemComponent={TemplateInputList}
 
        />
      </div>
    </div>
  );
}

export default RenderInputList;