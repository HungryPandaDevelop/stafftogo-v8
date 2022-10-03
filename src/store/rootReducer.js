
import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';


import fieldsAuthorization from 'store/reducers/base/fieldsAuthorization';
import fieldsRegistration from 'store/reducers/base/fieldsRegistration';
import fieldsEmployersAccount from 'store/reducers/base/fieldsEmployersAccount';
import fieldsApplicantsAccount from 'store/reducers/base/fieldsApplicantsAccount';
import fieldsVacancies from 'store/reducers/base/fieldsVacancies';
import fieldsResume from 'store/reducers/base/fieldsResume';
import fieldsChat from 'store/reducers/base/fieldsChat';
import fieldsExtraFilter from 'store/reducers/base/fieldsExtraFilter';

import specializationBase from "store/reducers/base/specializationBase";
import industryBase from "store/reducers/base/industryBase";

import infoAccountReducer from "store/reducers/infoAccountReducer";

import popupReducer from "store/reducers/popupReducer";
// import alphabetListPopupReducer from "store/reducers/alphabetListPopupReducer";

import popupMapInfoReducer from "store/reducers/popupMapInfoReducer";

import listingTypeReducer from "store/reducers/listingTypeReducer";
import listingSearchReducer from "store/reducers/listingSearchReducer";



const rootReducer = combineReducers({
  form: formReducer,
  fieldsAuthorization: fieldsAuthorization,
  fieldsRegistration: fieldsRegistration,
  fieldsEmployersAccount: fieldsEmployersAccount,
  fieldsApplicantsAccount: fieldsApplicantsAccount,
  fieldsVacancies: fieldsVacancies,
  fieldsResume: fieldsResume,
  fieldsChat: fieldsChat,
  fieldsExtraFilter: fieldsExtraFilter,
  accountInfo: infoAccountReducer,
  specializationBase: specializationBase,
  industryBase: industryBase,
  popupReducer: popupReducer,
  // alphabetListPopupReducer: alphabetListPopupReducer,
  popupMapInfoReducer: popupMapInfoReducer,
  listingTypeReducer: listingTypeReducer,
  listingSearchReducer: listingSearchReducer,
});

export default rootReducer;
