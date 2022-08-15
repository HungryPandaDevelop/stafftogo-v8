import { connect } from 'react-redux';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import RenderFormAccount from 'components/forms/RenderFormAccount';

// import { sendUserInfo } from 'store/asyncActions/sendUserInfo';
import { saveInfo } from 'store/asyncActions/saveInfo';

import ActionFn from 'store/actions';

const Account = ({
  ActionFn,
  uid,
  userInfo,
  checkingStatus,
  dataForm,
  fields,
}) => {


  /* получение данных пользователя */

  /* сохранение данных пользователя */
  const onSubmitIn = () => {
    ActionFn('CHANGE_ACCOUNT_INFO', true);
    saveInfo(dataForm.values, uid, 'users').then(() => {
      ActionFn('CHANGE_ACCOUNT_INFO', false);

      ActionFn('SET_INFO_ACCOUNT', dataForm.values);
    });
  }


  /* сохранение данных пользователя */



  return (
    <>

      {/* {console.log('fieldsAccount', fieldsAccount)} */}
      <TemplateAccount title="Учетная запись компании" >

        {checkingStatus ? 'Loading account...' : (
          <RenderFormAccount
            btnSaveText="Сохранить изменения"
            objFields={fields}
            orderFields={fields.order}
            initialValues={userInfo}
            onSubmitProps={onSubmitIn}
          />
        )}


      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log('state', state)
  const formReducer = state.form && state.form.singleInput;
  const fields = state.accountInfo.info.typeCabinet === 'vacancies' ? state.fieldsEmployersAccount : state.fieldsApplicantsAccount;

  return {
    fields: fields,
    dataForm: formReducer,
    userInfo: state.accountInfo.info,
    uid: state.accountInfo.info.uid,
    checkingStatus: state.accountInfo.checkingStatus
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(Account);