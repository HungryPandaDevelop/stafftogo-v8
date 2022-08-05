import employeesIcoOrange from 'front-end/images/employees/1-orange.svg';

const specializationBtnContent = (el) => {
  if (el.length === 0) {
    return 'Специализация сотрудника';
  } else if (el.length > 0 && el.length < 4) {
    return el.map((item, i) => <img key={i} className="ico-back" src={employeesIcoOrange} alt="" />);
  }
  else if (el.length > 3) {
    return 'и еще ' + (el.length - 3);
  }
}

export default specializationBtnContent;