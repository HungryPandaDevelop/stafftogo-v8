export default function(){
  return {
    order: [
      "gender",
      "titleOne",
      "age_from",
      "age_to",
      "titleTwo",
      "exp_from",
      "exp_to",
      "additional",
    ],
    gender: {
      type:"radio",
      name: "gender", 
      label: "Пол", 
      options: [
        {label:'Не имеет значения', value: "no" },
        {label:'Женщина', value: "women" },
        {label:'Мужчина', value: "men" },
      ]
    },
    titleOne: {
      type:"title",
      label:"Возраст", 
      
    },
    age_from: { 
      type:"text" ,
      name: "age_from", 
      placeholder: "От", 
    },
    age_to: { 
      type:"text", 
      name: "age_to", 
      placeholder: "До", 
      
    },
    titleTwo: {
      type:"title",
      label:"Опыт", 
    },
    exp_from: { 
      type:"text" ,
      name: "exp_from", 
      label: "", 
      placeholder: "От", 
    },
    exp_to: { 
      type:"text",  
      name: "exp_to", 
      placeholder: "До", 
    },
    additional: { 
      type:"checkbox",
      name: "additional", 
      label: "", 
      options: [
        { label: 'Есть ИП/Самозанятый', value: 'type_1' },
        { label: 'Медицинская книжка', value: 'type_2' },
        { label: 'Готовность к командировкам', value: 'type_3' },
        { label: 'Готовность работать ночью', value: 'type_4' },
        { label: 'Срочный выезд', value: 'type_5' },
        { label: 'Разрешение на работу в России', value: 'type_6' },
        { label: 'Гражданство РФ', value: 'type_7' },
      ]
    },
  }
}