// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.


// My solution

function list(names){
    let formattedString = '';
     if (names.length === 0) {
      return '';
    }
    if (names.length === 1) {
      return names[0].name
    }
    if (names.length === 2) {
      return names[0].name +' & '+ names[1].name 
    }
    else {
      for (let i = 0; i < names.slice(0,-2).length; i++) {
        formattedString += names.slice(0,-2)[i].name + ', ' 
      }
      formattedString += list(names.slice(-2))
      return formattedString
    }
  }