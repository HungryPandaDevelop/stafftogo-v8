

const filterMain = (listingSearch, data)=>{

  const findFromTo = (dataIn, fromInputIn, toInputIn, elSearch) => {

    const fromInput = fromInputIn;
    const toInput = toInputIn;
  
    return dataIn.filter(item => {
      let priceEl;
      if (elSearch === 'age' || elSearch === 'exp_work') {
        priceEl = Number(item.data.userInfo[elSearch]);
      } else {
        priceEl = Number(item.data[elSearch]);
      }
  
  
      if (fromInput && toInput) {
        if (priceEl >= fromInput && priceEl <= toInput) {
          return item;
        }
      } else if (fromInput) {
        if (priceEl >= fromInput) {
          return item;
        }
      } else if (toInput) {
        if (priceEl <= toInput) {
          return item;
        }
      }
    });
  
  }
  
  const findByType = (dataIn, type1, type2) => {
  
    return dataIn.filter(item => {
  
      if (item.data[type1]) {
        if (!listingSearch[type2].some(ele => !item.data[type1].includes(ele))) {
          console.log('in')
          return item;
        };
      };
    });
  }


  if (listingSearch.name) {
    data = data.filter(item => item.data.card_name.indexOf(listingSearch.name) >= 0);
  }

  if (listingSearch.price_from || listingSearch.price_to) {

    data = findFromTo(data, Number(listingSearch.price_from), Number(listingSearch.price_to), 'salary_priceFrom');

  }

  if (listingSearch.age_from || listingSearch.age_to) {
    data = findFromTo(data, Number(listingSearch.age_from), Number(listingSearch.age_to), 'age');
  }

  if (listingSearch.exp_from || listingSearch.exp_to) {
    data = findFromTo(data, Number(listingSearch.userInfo.exp_from), Number(listingSearch.userInfo.exp_to), 'exp_work');
  }


  if (listingSearch.industry.length > 0) {

    data = findByType(data, 'industry', 'industry');
  }

  if (listingSearch.specialization.length > 0) {
    data = findByType(data, 'specialization', 'specialization');
  }


  if (listingSearch.gender && listingSearch.gender != 'no') {
    data = data.filter(item => listingSearch.gender === item.data.userInfo.gender);
  }



  if (listingSearch.additional.length > 0) {
    data = findByType(data, 'additional', 'additional');
  }

  return data;
}

export default filterMain;