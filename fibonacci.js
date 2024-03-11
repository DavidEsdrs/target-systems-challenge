const numberAsString = process.argv[2]

const number = parseInt(numberAsString);

if (isNaN(number) || number < 0) {
  console.log("O deve ser inteiro e não pode ser negativo!");
  return;
}

if(isInFibonacci(number)) {
  console.log('is in fibonacci :D')
} else {
  console.log('is not in fibonacci :(')
}

/**
 * 
 * @param {Array} number - Number that will be searched in fibonacci sequence
 * @returns {Boolean} Returns whether the given number is in fibonacci sequence or not
 */
function isInFibonacci(number) {
  let currentFibonacci = [1, 1]

  while(currentFibonacci[1] <= number) {
    if(currentFibonacci.some(x => x === number)) {
      return true
    } else {
      const lastItem = currentFibonacci[1]
      const nextItem = nextFibonacci(currentFibonacci)
      currentFibonacci = [lastItem, nextItem]
    }
  }

  return false
}

/**
 * 
 * @param {Array} tuple - An array of length 2 representing the current and last numbers calculated
 * @returns {Number} Returns the next fibonacci based on the given tuple
 */
function nextFibonacci(tuple) {
  return tuple.reduce((p, c) => p + c, 0)
}
