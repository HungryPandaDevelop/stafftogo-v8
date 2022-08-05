export const required = (value)=>{
  if(value) { return undefined;}
  return 'Обязательное поле'
}
export const minLength = (value)=>{
  if(value && value.length < 5) { return 'Минимум 6 символов';}
  return undefined;
}

export const mailCheck = (value)=>{
  const regex  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(value && regex.test(value)) { return undefined;}
  return 'Неправильно введена почта';
}