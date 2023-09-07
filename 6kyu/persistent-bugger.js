// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


// My solution

function persistence(num) {
    let numDigitsArr = num.toString().split('');
    let multiplicativePersistence = 0;
    
    while (numDigitsArr.length > 1) {
      numDigitsArr = numDigitsArr.reduce((dig, product) => product *= dig, 1)
      multiplicativePersistence++;
      numDigitsArr = numDigitsArr.toString().split('')
    }

    return multiplicativePersistence;
} 

// My solution 2

function persistence(num) {
    let multiplicativePersistence = 0;
    let numArray = num.toString().split('');
    
    if (numArray.length === 1) {
      return 0;
    }
    while (numArray.length > 1) {
      let product = 1;
      numArray.forEach(item => {
      product *= item;
      })
      multiplicativePersistence++;
      numArray = product.toString().split('');
    }
    return multiplicativePersistence;
}