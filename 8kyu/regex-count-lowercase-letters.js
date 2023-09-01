// Your task is simply to count the total number of lowercase letters in a string.
// Examples

// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26


// My solution

function lowercaseCount(str){
    return str.split('').filter(item => /[a-z]/g.test(item)).length
}

// My solution 2

function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length;
}
