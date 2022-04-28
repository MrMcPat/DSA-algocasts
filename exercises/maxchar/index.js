// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let strCount = {}
    let max = 0
    let key = ""
    for(let char of str) {
        if (!strCount[char]) {
            strCount[char] = 1
        } else {
            strCount[char]++
        }
    }
    for(let count in strCount) {
        if (max < strCount[count]) {
            max = strCount[count]
            key = count
        }
    }
    return key
}

module.exports = maxChar;
