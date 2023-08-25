// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sumOfPositives = 0;
  arr.forEach(arrItem => {   
    if (arrItem > 0) {       // if arrItem is greater than zero
      sumOfPositives += arrItem;        // add arrItem to total sum of positives
    }
  })
  return sumOfPositives;
}