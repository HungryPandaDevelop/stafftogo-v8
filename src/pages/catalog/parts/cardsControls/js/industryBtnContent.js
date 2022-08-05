import declination from './declination';

const industryBtnContent = (el) => {
  if (el.length > 0) {
    return 'Выбрано'+' '+el.length+' '+declination(el);
  } else {
    return 'Сфера деятельности';
  }
}

export default industryBtnContent;