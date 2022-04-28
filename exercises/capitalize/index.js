// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arr = str.split(" ")
    let capitalArr = []
    for (let i = 0; i < arr.length; i++) {
        capitalArr.push(arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1, arr[i].length))
    }
    return capitalArr.join(" ")
}

module.exports = capitalize;
