// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// My solution 

solution = (str) => str.split('').reverse('').join('')


// My solution 2

function solution(str){
    let revStr = '';
    i = str.length - 1;
    while(i >= 0) {
      revStr = revStr + str[i];
      i--;
    }
    return revStr
  }