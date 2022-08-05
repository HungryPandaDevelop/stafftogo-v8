import { useState, useRef, useEffect } from 'react';
import { Field } from 'redux-form';


const TemplateFieldSwitch = (props) => {

  const { input, label, options } = props;

  const [switchStatus, setSwitchStatus] = useState(false);
  const [firstLoad, setFirstLoad] = useState(0);

  const elRefL = useRef();
  const elRefR = useRef();

  const switchChange = () => {
    setSwitchStatus(!switchStatus);
    if (switchStatus) {
      elRefL.current.focus();
    } else {
      elRefR.current.focus();
    }
  };

  useEffect(() => {
    if (input.value && firstLoad === 0) {
      setFirstLoad(1);

      if (options[0].value === input.value) {
        setSwitchStatus(false);
      }
      else {
        setSwitchStatus(true);
      }
    }
  });

  return (
    <>
      <label><b>{label}</b></label>
      <div
        className="switch-container"
      >
        <input
          type="radio"
          ref={elRefL}
          checked={!switchStatus}
          {...input}
          value={options && options[0].value}
        />
        <input
          type="radio"
          ref={elRefR}
          checked={switchStatus}
          {...input}
          value={options && options[1].value}
        />

        <span>{options && options[0].name}</span>
        <div
          className={`switch-btn switch-btn--orange ${switchStatus ? 'switch-btn--active' : ''}`}
          onClick={switchChange}
        >
          <i></i>
        </div>
        <span>{options && options[1].name}</span>
      </div>

    </>
  )
}

const RenderInputSwitch = ({ name, label, options }) => {

  return <Field
    name={name}
    label={label}
    options={options}
    component={TemplateFieldSwitch}
  />;
}

export default RenderInputSwitch;