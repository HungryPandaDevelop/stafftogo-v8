import CloseBtn from './CloseBtn';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import RenderFormAccount from 'components/forms/RenderFormAccount';

const ExtraFilterContent = ({ showPopupControls, fields, dataForm, extraData, ActionFn }) => {



  const onSubmitIn = () => {
    console.log(dataForm.values);

    ActionFn('SEARCH_EXTRA_TO_LISTING', dataForm.values)


  }


  return (
    <div className="map-popup">
      <div className="map-popup-container filters-container">
        <CloseBtn showPopupControls={showPopupControls} />
        <RenderFormAccount
          btnSaveText="Сохранить изменения"
          objFields={fields}
          orderFields={fields.order}
          initialValues={extraData}
          onSubmitProps={onSubmitIn}
        />
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  const formReducer = state.form && state.form.singleInput;
  // console.log('state.listingSearchReducer', state.listingSearchReducer)
  return {

    fields: state.fieldsExtraFilter, // база полей
    dataForm: formReducer,
    extraData: state.listingSearchReducer.extra
  }
}


export default connect(mapStateToProps, { ActionFn })(ExtraFilterContent);