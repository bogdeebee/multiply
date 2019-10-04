module.exports = function multiply(first, second) {
  // your solution
  const firstArr = first.split('').reverse();
  const secondArr = second.split('').reverse();
  const multipliedNumbersArr  = [];

  firstArr.forEach(function cb(itemFirstArr, indexFirstArr) {
    secondArr.forEach(function cb(itemSecondArr, indexSecondArr) {
      let itemMultipliedNumbers = itemFirstArr * itemSecondArr;
      if (multipliedNumbersArr[indexFirstArr + indexSecondArr]) {
        multipliedNumbersArr[indexFirstArr + indexSecondArr] = multipliedNumbersArr[indexFirstArr + indexSecondArr] + itemMultipliedNumbers;
      } else {
        multipliedNumbersArr[indexFirstArr + indexSecondArr] = itemMultipliedNumbers;
      }
    })
  })
  
  for (var i = 0; i < multipliedNumbersArr.length; i++) {
    var itemMultipliedNumbers = multipliedNumbersArr[i] % 10;
    var moveItemMultipliedNumbers = Math.floor(multipliedNumbersArr[i] / 10);
    multipliedNumbersArr[i] = itemMultipliedNumbers;

    if (multipliedNumbersArr[i + 1]) {
      multipliedNumbersArr[i + 1] = multipliedNumbersArr[i + 1] + moveItemMultipliedNumbers;
    } else if (moveItemMultipliedNumbers != 0) {
      multipliedNumbersArr[i + 1] = moveItemMultipliedNumbers;
    }
  }

  return multipliedNumbersArr.reverse().join('');
}
