const declinationMass = ['сфера', 'cферы', 'сфер'];

const declination = (el) => {
  if (el.length == 1) {
    return declinationMass[0]
  }
  else if (el.length > 1 && el.length < 5) {
    return declinationMass[1]
  }
  else if (el.length > 4) {
    return declinationMass[2]
  }
};

export default declination;