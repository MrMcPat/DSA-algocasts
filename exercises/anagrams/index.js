// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     return stringA.replace(/[^\w\s]|_/g, "").toLowerCase().split("").sort().join("") === stringB.replace(/[^\w\s]|_/g, "").toLowerCase().split("").sort().join("")
// }

function anagrams(stringA, stringB) {
    let stringALower = stringA.replace(/[^\w\s]|_/g, "").toLowerCase()
    let stringBLower = stringB.replace(/[^\w\s]|_/g, "").toLowerCase()

    if (stringA.length !== stringB.length) return false

    let aCount = {}
    let bCount = {}

    for (let i = 0; i < stringA.length; i++) {
        if (!aCount[stringALower[i]]) aCount[stringALower[i]] = 0
        if (!bCount[stringBLower[i]]) bCount[stringBLower[i]] = 0
        aCount[stringALower[i]]++
        bCount[stringBLower[i]]++
    }

    for(let count in aCount) {
        if(aCount[count] !== bCount[count]) return false
    }

    return true
}

module.exports = anagrams;
