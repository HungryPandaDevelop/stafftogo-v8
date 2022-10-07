const setPriceText = (listingSearch) => {
  if (listingSearch.price_from && !listingSearch.price_to) {
    return (
      <>
        От: {listingSearch.price_from}
      </>
    )
  }
  else if (listingSearch.price_from && listingSearch.price_to) {
    return (
      <>
        От: {listingSearch.price_from}
        До: {listingSearch.price_to}
      </>
    )
  }
  else if (!listingSearch.price_from && listingSearch.price_to) {
    return (
      <>
        До: {listingSearch.price_to}
      </>
    )
  }
  else {
    return 'Вознагрождение';
  }
}

export default setPriceText;