// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let step = " ".repeat(n + n-1)
    let stepArr = step.split("")
    for(let i = 0; i < n; i++) {
        stepArr[i + Math.floor((n+n-1)/2)] = "#"
        stepArr[Math.floor((n+n-1)/2) - i] = "#"
        console.log(stepArr.join(""))
    }
}

//Recursive solution
// function pyramid(n, row = 0, level = "") {
//     if (row === n) {
//         return;
//     }
    
//     if (level.length === n + n - 1) {
//         console.log(level)
//         return pyramid(n, row + 1)
//     }

//     const midpoint = Math.floor((n + n - 1) / 2)
//     let add;

//     if (midpoint - row <= level.length && midpoint + row >= level.length) {
//         add = "#"
//     } else {
//         add = " "
//     }
//     pyramid(n, row, level + add)
// }

pyramid(3)

module.exports = pyramid;
