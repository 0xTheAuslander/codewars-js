// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


// My solution

maps = (x) => x.map(arrItem => arrItem * 2) 


// My solution 2

function maps(x){
    let y = []
    for (let i = 0; i< x.length; i++) {
      y[i] = x[i] * 2;
    }
    return y;
  }