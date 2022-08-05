import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import { toast } from 'react-toastify';


const ForgotPassword = () => {

  const [formData, setFormData] = useState({
    email: '',
  });

  const { email } = formData;

  const onChange = (e) => {

    setFormData(
      (prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value
      })
    )
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);

      toast.success('Письма сброса пароля отправлено на почту');

    } catch (error) {
      toast.error('Ошибка сброса пароля');
    }

  }

  return (
    <>
      <div className="content">
        <div className="main-full">
          <h1>Восстановить пароль</h1>
          <form
            className="form form-grid"
            onSubmit={onSubmit}>
            <div className="col-6">
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="email"
                className="input-decorate "
              />
            </div>
            <div className="col-12">
              <button
                className="btn btn--green"
              >
                Отправить пароль
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword