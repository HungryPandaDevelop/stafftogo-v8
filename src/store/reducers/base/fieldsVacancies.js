export default function(){
  return {
    order: [
      "coords",
      "titleOne",
      "typeSpecialist",
      "card",
      "typeWork",
      "salary",
      "titleTwo",
      "responsibilities",
      "titleThree",
      "education",
      "courses",
      "wetake",
      "titleFour",
      "rubric",
      "region",
      "settings"
    ],
    coords: { 
      type:"coords", 
      name: "coords",  
      placeholder: "Адрес", 
      label: "Адрес"
    },
    card: { 
      type: "multy", 
      mainname: "card", 
      allFields: [
        { 
          type:"text", 
          name: "name",  
          placeholder: "Введите наименование вакансии", 
          label:"Наименование вакансии", 
          length: "col-6"
        },
        { 
          type:"select", 
          name: "type",  
          length: "col-6", 
          label:"Выбрать наименование из библиотеки вакансий",
          placeholder: "Поисковая выдача для соискателей больше",
          options: [
            {name:"Продавец", value:"type1"}, 
            {name:"Кладовщик", value:"type2"}, 
            {name:"Мерчендайзер", value:"type3"}, 
            {name:"Стажер IT", value:"type4"}  , 
            {name:"Инженер", value:"type5"}
          ]
        },
      ]
    },
    responsibilities: { 
      type:"textarea", 
      name: "responsibilities",  
      label: "Основные обязанности",
      placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)" 
    },
    typeSpecialist: { 
      type:"checkbox", 
      name: "typeSpecialist", 
      options: [
        { label: 'Мне нужен один специалист', value: 'one_spec' },
        { label: 'Мне нужна команда', value: 'multy_spec' }
      ] 
    },
    typeWork: {
      type: "checkbox", 
      name: "typeWork", 
      label:"Тип работы", 
      options:[
        {label: "Постоянная работа", value:"type_1"},
        {label: "Ночная работа", value:"type_2"},
        {label: "Сдельная работа/Подмена", value:"type_3"},
        {label: "Срочная работа", value:"type_4"},
        {label: "Консалтинг", value:"type_5"},
        {label: "Фриланс", value:"type_6"},
      ]
    },
    settings: {
      type: "checkbox", 
      name: "settings", 
      options:[
        {label: "Включить автоподбор резюме", value:"type_1"},
        {label: "Разместить вакансию анаонимно (скрыть название компании)", value:"type_2"},
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
    courses: { 
      type: "multy", 
      mainname: "courses", 
      label:"Оконченные курсы",  
      allFields: [
        { name: "date",  type:"text", placeholder: "мм.гг. - мм.гг.", length: "col-4"},
        { name: "place",  type:"text", placeholder: "Наименование учебного заведения", length: "col-8 margin-botton-15" },
        { name: "name",  type:"text", placeholder: "Наименование курса", length: "col-12" },
      ],
    },
    wetake:{
      type:"checkbox", 
      name: "wetake", 
      label:"Рассматриваем на вакансию всех, в том числе",
      options: [
        { label: 'Пенсионеров', value: 'type1' },
        { label: 'Соискателей с инвалидностью', value: 'type2' },
        { label: 'Студентов', value: 'type3' },
        { label: 'Иностранных граждан (мигрантов)', value: 'type4' },
      ] 
    },
    rubric: {
      type: "select", 
      name: "rubric",
      label:"Рубрика", 
      placeholder:"Выбрать",
      options: [
        {name: "Бар", value:"type_1"},
        {name: "Вендинг", value:"type_2"},
        {name: "Винная", value:"type_3"},
        {name: "Винодельня", value:"type_4"},
        {name: "Гостиница", value:"type_5"},
        {name: "Кейтеринг", value:"type_6"},
        {name: "Кондитерская", value:"type_7"},
        {name: "Кофейня", value:"type_8"},
        {name: "Отель", value:"type_9"},
      ] 
    },
    education: {
      type: "select", 
      name: "education",
      label:"Образование", 
      placeholder:"Выберать образование",
      options: [
        {name:"Высшее", value:"type1"}, 
        {name:"Профессиональное", value:"type2"} ,
        {name:"Среднее специальное", value:"type3"},
        {name:"Неважно", value:"type4"}
      ] 
    },
    region: {
      type: "select", 
      name: "region",
      label:"Регион показа", 
      placeholder:"Москва",
      options: [
        {name:"Москва", value:"type1"}, 
        {name:"Профессиональное", value:"type2"} ,
        {name:"Среднее специальное", value:"type3"},
        {name:"Неважно", value:"type4"}
      ] 
    },
    titleOne: {
      type:"title",
      label:"Основная информация", 
    },
    titleTwo: {
      type:"title",
      label:"Обязанности", 

    },
    titleThree: {
      type:"title",
      label:"Требования",
      
    },
    titleFour: {
      type:"title",
      label:"Настройка публикации вакансии", 
    },
  }
}