import RenderFormAccount from 'components/forms/RenderFormAccount';
import { v4 as uuid } from 'uuid';
import { sendMessage } from 'store/asyncActions/inviteChat';
import { connect } from 'react-redux';

const ChatForm = ({ formData, fieldsChat, roomId, uid }) => {

  const onSubmitIn = () => {

    if (formData) {

      const unique_id = uuid();
      sendMessage(roomId, formData.message, unique_id, uid);
      formData.message = '';

    }
    else {
      console.log('error')
    }
  }

  return (
    <div>
      <RenderFormAccount
        btnSaveText="Отправить"
        objFields={fieldsChat}
        orderFields={fieldsChat.order}
        onSubmitProps={onSubmitIn}

      />
    </div>
  )
}


const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  return {
    fieldsChat: state.fieldsChat, // база полей
    roomId: state.accountInfo.roomId,
    formData: formReducer,
  }
}

export default connect(mapStateToProps)(ChatForm);
