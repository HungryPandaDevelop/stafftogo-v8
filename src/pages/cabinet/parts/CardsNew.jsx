import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

import { addCards } from 'store/asyncActions/addCards';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import RenderFormAccount from 'components/forms/RenderFormAccount';


const VacanciesNew = ({ accountInfo, uid, cabinetType, fields, dataForm }) => {

  const navigate = useNavigate();

  const onSubmitIn = () => {
    const addUserInfo = { ...dataForm.values, userInfo: accountInfo };

    addCards(addUserInfo, cabinetType, uid).then(() => {
      navigate('/cabinet/' + cabinetType, { replace: true });
    });

  }



  return (
    <>
      <TemplateAccount title="Создание вакансии" >
        <RenderFormAccount
          btnSaveText="Добавить вакансию"
          objFields={fields}
          orderFields={fields.order}
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
    accountInfo: state.accountInfo.info,
    cabinetType: state.accountInfo.info.typeCabinet,
    fields: fields, // база полей
    dataForm: formReducer,
  }
}

export default connect(mapStateToProps)(VacanciesNew);