const baseSorting = (professionBase) => {
  let massBaseSort = [[]]

  let Letter = professionBase[0].name[0]
  let LetterCount = 0

  const byField = (name) => {
    return (a, b) => a[name] > b[name] ? 1 : -1;
  }

  professionBase.sort(byField('name'));

  professionBase.map((item, i) => {

    if (Letter.toLocaleLowerCase().toString() === item.name[0].toLocaleLowerCase().toString()) {
      massBaseSort[LetterCount].push(item)
    }
    else {
      Letter = item.name[0]
      LetterCount++
      massBaseSort.push([item])
    }
  })


  return massBaseSort
}

export default baseSorting