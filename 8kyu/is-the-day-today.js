// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.


// My solution

function isToday(date) {
    const today = new Date();
    return today.toDateString() === date.toDateString();
}


// My solution 2

function isToday(date) {
    const today = new Date();
    return today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear();
}