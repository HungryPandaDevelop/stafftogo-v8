import { required, minLength,mailCheck } from 'components/forms/validator';

export default function(){
  return {
    order: ["f","n","o","phone","email","commets","agreement"],
    f: { 
      name: "f", 
      placeholder: "Фамилия", 
      type:"text",
      validate: [required,minLength] 
    },
    n: { 
      name: "n", 
      placeholder: "Имя", 
      type:"text",
      validate: [required,minLength] 
    },
    o: { 
      name: "o", 
      placeholder: "Отчество", 
      type:"text",
      validate: [required,minLength] 
    },
    phone: { 
      type:"phone" ,
      name: "phone", 
      placeholder: "Телефон",
    },
    email: { 
      name: "email", 
      placeholder: "Почта", 
      type:"text", 
      validate: [required,minLength,mailCheck]
    },
    commets: { 
      type:"textarea", 
      name: "commets", 
      placeholder: "Комментарий", 
      maxLength: 500
    },
    agreement: { 
      type:"checkbox", 
      name: "agreement",
      options: [
        { label: 'Я даю свое согласие на обработку персональных данных', value: 'agreement_on' },
      ],
      validate: [required] 
    },
  }
}