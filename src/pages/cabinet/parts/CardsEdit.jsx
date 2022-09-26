import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import RenderFormAccount from 'components/forms/RenderFormAccount';

import { useParams, useNavigate } from 'react-router-dom';

import { getSingleListing } from 'store/asyncActions/getSingleListing';

import { saveInfo } from 'store/asyncActions/saveInfo';


const VacanciesEdit = ({ accountInfo, cabinetType, fields, dataForm }) => {

  const [getInfo, setGetInfo] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleListing(cabinetType, params.elementId).then(res => {
      //console.log(res);
      setGetInfo(res);
    });
  }, []);

  /* получение данных пользователя */

  /* сохранение данных пользователя */
  const onSubmitIn = () => {
    console.log(dataForm.values, getInfo);



    saveInfo({ ...dataForm.values }, params.elementId, cabinetType).then(() => {
      navigate('/cabinet/' + cabinetType, { replace: true });
    });
  }

  /* сохранение данных пользователя */



  return (
    <>

      <TemplateAccount title="Редкатировать вакансию" >
        <RenderFormAccount
          btnSaveText="Сохранить изменения"
          objFields={fields}
          orderFields={fields.order}
          initialValues={getInfo ? getInfo : null}
          onSubmitProps={onSubmitIn}
        />
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;
  const fields = state.accountInfo.info.typeCabinet === 'vacancies' ? state.fieldsVacancies : state.fieldsResume;
  return {
    uid: state.accountInfo.info.uid,
    cabinetType: state.accountInfo.info.typeCabinet,
    fields: fields, // база полей
    dataForm: formReducer,
  }
}


export default connect(mapStateToProps)(VacanciesEdit);