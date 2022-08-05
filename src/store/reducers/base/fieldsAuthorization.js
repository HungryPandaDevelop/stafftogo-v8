import { required, minLength,mailCheck } from 'components/forms/validator';

export default function(){
  return {
    order: ["email","password",],
    email: { name: "email", label: "Почта пользователя", placeholder: "Почта пользователя", type:"text",validate: [required,minLength,mailCheck]  },
    password: { name: "password", label: "Пароль", placeholder: "Введите пароль", type:"password",validate: [required,minLength] },
  }
}