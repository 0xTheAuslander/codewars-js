// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


// My solution

function arrayPlusArray(arr1, arr2) {
    sumOfArray = (arr) => {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    } 
    return sumOfArray(arr1) + sumOfArray(arr2);
}