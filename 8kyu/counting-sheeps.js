// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


// My solution

function countSheeps(arrayOfSheep) {
    let total = 0;
    arrayOfSheep.forEach(arrItem => {
      if (arrItem === true ) {
        total++;
      }
      })
    return total;
  }

// My solution 2

function countSheeps(arr) {            
  return arr.filter(Boolean).length;   // The arr.filter(Boolean) is equivalent to arr.filter(item => Boolean(item))

}

// Bonus : how filter(Boolean) works ?

// 1) Each item in the array is passed to the Boolean constructor
// 2) The Boolean constructor coerces each item to true or false depending on whether it’s truthy or falsy
// 3) If the item is truthy, we keep it

