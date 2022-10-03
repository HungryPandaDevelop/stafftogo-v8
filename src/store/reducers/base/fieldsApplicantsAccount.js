export default function(){
  return {
    order: [
      "typeCabinet",
      "titleOne",
      "name",
      "email",
      "phone",
      "statusInSite",
      "imgsAccount",
      "gender",
      "fio",
      "age",
      "exp_work",
      "country",
    ],
    typeCabinet: {
      type:"switch",
      name: "typeCabinet", 
      label: "Тип кабинета", 
      options: [
        {name:"Соискатель",value:"resume"},
        {name:"Компания", value:"vacancies"},
      ],
    },
    name: { 
      type:"text" ,
      name: "name", 
      label: "Имя пользователя", 
      placeholder: "Имя пользователя", 
      
    },
    gender: {
      type:"radio",
      name: "gender", 
      label: "Пол", 
      options: [
        {label:'Женщина', value: "women" },
        {label:'Мужчина', value: "men" },
      ]
    },
    exp_work: { 
      type:"text" ,
      name: "exp_work", 
      label: "Общий стаж работы", 
      placeholder: "Общий стаж работы", 
      
    },
    email: { 
      type:"text" ,
      name: "email", 
      label: "Почта", 
      placeholder: "Почта", 
      disabled: 0
    },
    phone: { 
      type:"phone" ,
      name: "phone", 
      label: "Телефон", 
      placeholder: "Телефон",
    },
    statusInSite: {
      type:"switch",
      name: "statusInSite", 
      label: "Мой статус на сайте", 
      options: [
        {name:"Я ищу работу",value:"on"},
        {name:"Я не ищу работу", value:"off"},
      ],
    },
    fio: { 
      type:"text" ,
      name: "fio", 
      label: "Фио", 
      placeholder: "Фио", 
      
    },
    age: { 
      type:"text" ,
      name: "age", 
      label: "Возраст", 
      placeholder: "Возраст", 
      
    },
    country: { 
      type:"text" ,
      name: "country", 
      label: "Гражданство", 
      placeholder: "Гражданство", 
    },
    imgsAccount: {
      type: "file", 
      name: "imgsAccount", 
      label:"Загрузите ваше фото", 
      labelSecond:"(JPG или PNG, вес не более 1 Mb, ширина/высота логотипа не менее 320 px)", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 1000000, 
      textEmpty: "На данный момент фоно не выбрано"
    },
    titleOne: {
      type:"title",
      label:"Основная информация", 
    },
  }
}