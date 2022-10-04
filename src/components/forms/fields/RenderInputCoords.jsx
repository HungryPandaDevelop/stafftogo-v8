import { Field } from 'redux-form';
import { useEffect, useState, useRef } from 'react';

const TemplateCoords = (props) => {

  const { input, label, labelSecond } = props;

  const elRef = useRef();
  const originRef = useRef();
  const [custVal, setCustVal] = useState('');
  const [firstLoad, setFirstLoad] = useState(0);


  useEffect(() => {
    if (input.value && firstLoad === 0) {
      setFirstLoad(1);
      const getClearAddress = input.value.split('--');
      originRef.current.value = getClearAddress[0]
      setCustVal(input.value);
    }
  });

  useEffect(() => {

    setTimeout(() => {
      const { ymaps } = window
      const suggest = new ymaps.SuggestView('suggest')

      suggest.events.add('select', (e) => {
        const val = String(e.get('item').value.trim())
        const myGeocoder = ymaps.geocode(val)
        myGeocoder
          .then(res => {

            setCustVal(val + "--" + res.geoObjects.get(0).geometry._coordinates[0] + "--" + res.geoObjects.get(0).geometry._coordinates[1]);
            elRef.current.focus();

          })
      })
    }, 1000)

  }, []);

  const checkEpmty = (e) => {

    if (e.target.value.length === 0) {
      console.log('set empty');
      setCustVal('');
      elRef.current.focus();
    }
  }

  return (
    <>
      {label && <label className="col-12"><b>{label}</b><span>{labelSecond}</span></label>}
      <input
        ref={originRef}
        id="suggest"
        type="text"
        className="input-decorate"
        onChange={checkEpmty}
        autoComplete="off"
      />
      <input
        type="text"
        ref={elRef}
        {...input}
        value={custVal}
        className="hidden-field"
        autoComplete="off"
      />


    </>
  )
}
const RenderInputCoords = (props) => {


  return <>

    <Field
      name={props.name}
      props={props}
      component={TemplateCoords}
    />
  </>
}


export default RenderInputCoords;