export default function(){
  return {
    order: [
      "titleOne",
      "card_name",
      "coords",
      "salary",
      "industry",
      "typeSpecialization",
      "titleTwo",
      "companyWork",
      "titleThree",
      "education",
      "institution",
      "lang",
      "titleFour",
      "employment",
      "work_time",
      "car_exp",
      "additional",
    ],
    coords: { 
      type:"coords", 
      name: "coords",  
      placeholder: "Адрес", 
      label: "Адрес"
    },
    titleOne: {
      type:"title",
      label:"Основная информация", 
    },
    titleTwo: {
      type:"title",
      label:"Сведения о работе", 
    },
    titleThree: {
      type:"title",
      label:"Образование", 
    },
    titleFour: {
      type:"title",
      label:"Дополнительно", 
    },
    industry: {
      type: "list", 
      name: "industry", 
      label:"В какой сфере вы хотите работать?", 
      options:[
        {label: "Бар", value:"type_1"},
        {label: "Вендинг", value:"type_2"},
        {label: "Винная", value:"type_3"},
        {label: "Винодельня", value:"type_4"},
        {label: "Гостиница", value:"type_5"},
        {label: "Кейтеринг", value:"type_6"},
        {label: "Кондитерская", value:"type_7"},
        {label: "Кофейня", value:"type_8"},
        {label: "Отель", value:"type_9"},
        {label: "Пекарня", value:"type_10"},
        {label: "Вендинг", value:"type_11"},
        {label: "Пивная", value:"type_12"},
        {label: "Пищевой завод", value:"type_13"},
        {label: "Пиццерия", value:"type_14"},
        {label: "Развлечения", value:"type_15"},
        {label: "Реклама", value:"type_16"},
        {label: "Ресторан", value:"type_17"},
        {label: "Сыроварня", value:"type_18"},
        {label: "Фаст Фуд", value:"type_19"},
        {label: "Франчайзинг", value:"type_20"},
        {label: "Частная ферма", value:"type_21"},
      ]
    },
    typeSpecialization: {
      type: "list", 
      name: "specialization", 
      label:"Специализация сотрудника?", 
      options:[
        {label: "Администратор", value:"spec_1"},
        {label: "Водитель", value:"spec_2"},
        {label: "Горничная", value:"spec_3"},
        {label: "Диджей", value:"spec_4"},
      ]
    },
    salary: { 
      type: "multy", 
      mainname: "salary", 
      label:"Зарплата",  
      allFields: [
        { 
          type:"text", 
          name: "priceFrom",  
          placeholder: "От", 
          length: "col-4"
        },
        { 
          type:"select", 
          name: "priceType",  
          length: "col-4",
          placeholder:"Руб./мес.",
          options: [
            {name:"Руб./Смена", value:"type1"}, 
            {name:"Руб./Час", value:"type2"}, 
            {name:"За проект", value:"type3"}, 
          ]
        },
      ],
    },
    card_name:{
      type:"text", 
      name: "card_name",  
      placeholder: "Желаемая должность", 
      label:"Желаемая должность", 
    },
    companyWork: {
      type: "multy", 
      mainname: "companyWork", 
      label:"Организация",  
      allFields: [
        { 
          type:"text", 
          name: "name", 
          placeholder: "Наименование организации", 
          length: "col-6" 
        },
        { 
          type:"text", 
          name: "type", 
          placeholder: "Должность",
          length: "col-6" 
        },
        { 
          type:"textarea", 
          name: "work", 
          placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)", 
          maxLength: 500,
          length: "col-12" 
        },
      ],
    },
    education: { 
      type:"checkbox", 
      name: "typeEducation",
      options: [
        { label: 'Среднее', value: 'type1' },
        { label: 'Неоконченное высшее', value: 'type2' },
        { label: 'Бакалавр', value: 'type3' },
        { label: 'Средне специальное', value: 'type4' },
        { label: 'Высшее', value: 'type5' },
        { label: 'Магистр', value: 'type6' },
      ] 
    },
    institution: {
      type: "multy", 
      mainname: "institution", 
      label:"Учебное заведение",  
      allFields: [
        { 
          type:"text", 
          name: "name", 
          placeholder: "Наименование учебного заведения", 
          length: "col-6" 
        },
        { 
          type:"text", 
          name: "type", 
          placeholder: "Факультет",
          length: "col-6" 
        },
        { 
          type:"text", 
          name: "special", 
          placeholder: "Специализация",
          length: "col-6" 
        },
        { 
          type:"text", 
          name: "year", 
          placeholder: "Год окончания",
          length: "col-6" 
        },
      ],
    },
    lang: {
      type: "additional", 
      name: "lang", 
      label:"Владение языками", 
      btnTextAdd:"+ Добавить язык", 
      typeInner: "text"
    },
    employment: { 
      type:"select", 
      name: "employment", 
      label: "Занятость", 
      placeholder: "Занятость", 
      options:[
        {name: "Полная", value:"type_1"},
        {name: "Частичная", value:"type_2"},
        {name: "Волонтерство", value:"type_3"},
        {name: "Стажировка", value:"type_4"},
        {name: "Подработка", value:"type_5"},
      ]
    },
    work_time: { 
      type:"select", 
      name: "work_time", 
      label: "График работы", 
      placeholder: "График работы", 
      options:[
        {name: "Полный день", value:"type_1"},
        {name: "Сменый график", value:"type_2"},
        {name: "Гибкий график", value:"type_3"},
        {name: "Вахтовый метод", value:"type_4"},
        {name: "Удаленная работа", value:"type_5"},
      ]
    },
    car_exp: { 
      type: "select", 
      name: "car_exp", 
      label: "Опыт вождения", 
      placeholder: "Опыт вождения", 
      options:[
        {name: "A", value:"type_1"},
        {name: "B", value:"type_2"},
        {name: "C", value:"type_3"},
        {name: "D", value:"type_4"},
        {name: "E", value:"type_5"},
      ]
    },    
    additional: {
      type:"checkbox", 
      name: "additional",
      options: [
        { label: 'Есть ИП/Самозанятый', value: 'type_1' },
        { label: 'Медицинская книжка', value: 'type_2' },
        { label: 'Готовность к командировкам', value: 'type_3' },
        { label: 'Готовность работать ночью', value: 'type_4' },
        { label: 'Срочный выезд', value: 'type_5' },
        { label: 'Разрешение на работу в России', value: 'type_6' },
        { label: 'Гражданство РФ', value: 'type_6' },
      ] 
    },
  }
}