export default function(){
  return {
    order: [
      "typeCabinet",
      "titleOne",
      "name","email",
      "typeEmployer",
      "name_company",
      "site_company",
      "typeJob",
      "description_company",
      "imgsAccount",
      "num_workers",
      "titleTwo", 
      "legalNameCompany",
      "centralOffice",
      "how_get",
      "phones",
      "inn_company",
      "kpp",
      "bank",
      "bik",
      "kc",
      "pc",
      "legal_address", 
      "closeDoc",
      "videoCompany"
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
    name_company: { 
      type:"text", 
      name: "name_company", 
      label: "Наименование компании", 
      labelSecond:"(Так наименование компании будет отображатся в вакансиях)", 
      placeholder: "Наименование компании", 
      
    },
    email: { 
      type:"text" ,
      name: "email", 
      label: "Почта", 
      placeholder: "Почта", 
      disabled: 0
    },
    site_company: { 
      type:"text",  
      name: "site_company", 
      label: "Сайт компании", 
      placeholder: "Доменное имя вашего сайта ", 
    },
    num_workers: { 
      type:"text", 
      name: "num_workers", 
      label: "Количество сотрудников", 
      labelSecond:"(Указывается число сотрудников в цифровом эквиваленте)", 
      placeholder: "Введите цифру от 1", 
      typeField: "number"
    },
    kpp: { 
      type:"text",
      name: "kpp", 
      label: "КПП компании", 
      placeholder: "Кпп",  
    },
    inn_company: { 
      type:"text", 
      name: "inn_company", 
      label: "ИНН компании", 
      placeholder: "ИНН компании", 
    },
    bank: { 
      type:"text",
      name: "bank", 
      label: "Банк", 
      placeholder: "Банк", 
    },
    bik: { 
      type:"text", 
      name: "bik", 
      label: "БИК",
      placeholder: "БИК", 
    },
    kc: { 
      type:"text", 
      name: "kc", 
      label: "К/С", 
      placeholder: "К/С", 
      
    },
    pc: { 
      type:"text",  
      name: "pc", 
      label: "Р/С", 
      placeholder: "Р/С", 
    },
    legal_address: { 
      type:"text", 
      name: "legal_address", 
      label: "Юридический адрес", 
      placeholder: "Юридический адрес", 
    },
    description_company: { 
      type:"textarea", 
      name: "description_company", 
      label: "Краткое описание компании", 
      placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)", 
      maxLength: 500
    },
    how_get: { 
      type:"textarea", 
      name: "how_get", 
      label: "Как добраться до офиса", 
      placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)", 
      maxLength: 500
    },
    
    closeDoc: { 
      type:"checkbox", 
      name: "closeDoc",
      label: "Закрывающие документы",
      options: [
        { label: 'По почте', value: 'to_mail' },
        { label: 'По электронной почте', value: 'to_email' },
        { label: 'Документы не нужны', value: 'not' }
      ]
    },
    typeEmployer: { 
      type:"checkbox", 
      name: "typeEmployer", 
      label: "Тип работодателя", 
      options: [
        { label: 'Прямой работодатель', value: 'direct' },
        { label: 'Кадровое агентство', value: 'agency' }
      ] }
      ,
    titleOne: {
      type:"title",
      label:"Основная информация", 
      
    },
    titleTwo: {
      type:"title",
      label:"Реквизиты компании",
    },
    typeJob: {
      type: "list", 
      name: "typeJob", 
      label:"Тип компании", 
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
    phones: {
      type: "additional", 
      name: "phones", 
      label:"Телефоны", 
      btnTextAdd:"+ Добавить еще один телефон", 
      typeInner: "phone"
    },
    legalNameCompany: {
      type: "multy", 
      mainname: "legalNameCompany", 
      label:"Юридическое наименование организации",  
      allFields: [
        { 
          type:"select", 
          name: "type",
          length: "col-6", 
          placeholder: "Общество с ограниченной ответственностью",
          options: [
            {name:"ООО", value:"type1"}, 
            {name:"ЗАО", value:"type2"}, 
            {name:"ОАО", value:"type3"}, 
            {name:"ИП", value:"type4"} ,
            {name:"УП", value:"type5"}  , 
            {name:"Общ. орг.", value:"type6"}  , 
            {name:"Некорм. орг.", value:"type7"}  , 
            {name:"Гос. уч.", value:"type8"}  , 
            {name:"АО", value:"type9"}  , 
            {name:"ПАО", value:"type10"}  , 
            
          ]
        },
        { 
          type:"text", 
          name: "name", 
          placeholder: "Наименование компании", 
          length: "col-6" 
        },

      ],
    },
    centralOffice: { 
      type: "multy", 
      mainname: "centralOffice", 
      label:"Центральный офис компании",  
      allFields: [
        { 
          type:"select", 
          name: "city",  
          length: "col-6", 
          placeholder: "Город",
          options: [
            {name:"Москва", value:"type1"}, 
            {name:"Санкт-Петербург", value:"type2"}, 
            {name:"Казань", value:"type3"}, 
            {name:"Сочи", value:"type4"}  , 
            {name:"Севастополь", value:"type5"}
          ]
        },
        { 
          name: "address",  
          type:"text", 
          placeholder: "Адрес: улица, дом, корпус, строение", 
          length: "col-6" 
        },
      ],
    },
    imgsAccount: {
      type: "file", 
      name: "imgsAccount", 
      label:"Загрузите логотип компании", 
      labelSecond:"(JPG или PNG, вес не более 1 Mb, ширина/высота логотипа не менее 320 px)", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 1000000, 
      textEmpty: "На данный момент логотип не выбран"
    },
    videoCompany: {
      type: "file",
      name: "videoCompany",
      label:"Загрузите видеоприветствие", 
      typeFile: "video", 
      textEmpty:"На данный момент видео не выбрано"
    },
    typeCompany: {
      type: "select",
      name: "typeCompany", 
      label:"Тип компании",
      labelSecond:"выберете тип", 
      options: [
        {name:"ООО", value:"ooo"}, 
        {name:"ЗАО", value:"zao"} ,
        {name:"ИП", value:"ip"}
      ]
    },
  }
}