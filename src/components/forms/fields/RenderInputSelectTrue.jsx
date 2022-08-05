import { useState, useEffect, useRef } from 'react';
import { Field } from 'redux-form';


const TemplateSelect = (props) => {
  // console.log('hi', props)
  const { input, name, placeholder, label, labelSecond, options } = props;
  const elRef = useRef();
  const [custVal, setCustVal] = useState('');


  // создание селекта

  const selectRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(placeholder);
  const [firstLoad, setFirstLoad] = useState(0);

  useEffect(() => {

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e) {
      if (selectRef && selectRef.current) {
        const ref = selectRef.current
        if (!ref.contains(e.target)) {
          setOpen(false)
        }
      }
    }
  }, []);




  useEffect(() => {
    if (input.value && firstLoad === 0) {
      setFirstLoad(1);
      setCustVal(input.value);

      const findEl = (options.filter((fl) => fl.value === input.value));

      if (findEl.length > 0) {
        setSelect(findEl[0].name);
      };

    }
  });
  // console.log(options, select)

  const renderOptions = options.map((li) => {
    if (select && li.value === select.value) {
      return null;
    }
    return (
      <li
        key={li.value}
        onClick={() => { onSelectedChange(li) }}>
        {li.name}
      </li>
    )
  });

  const onSelectedChange = (value) => {
    elRef.current.focus();

    setCustVal(value.value);
    setSelect(value.name);

  }


  return (
    <div className="form-line">
      {label && (<label><b>{label}</b> <span>{labelSecond}</span></label>)}
      <div
        ref={selectRef}
        className={`custom-select ${open ? 'active' : ''}`}
        onClick={() => { setOpen(!open) }} >
        <input ref={elRef} type="text" {...input} value={custVal} />
        <span>{select}</span>
        <i></i>
        <ul className='ln'>
          {renderOptions}
        </ul>
      </div>

    </div>
  )
}

const RenderInputSelectTrue = (props) => {
  return <Field
    name={props.name}
    props={props}
    component={TemplateSelect}
  />

}

export default RenderInputSelectTrue;