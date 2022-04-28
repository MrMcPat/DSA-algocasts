// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//     let arr = []
//     let subArr = []
//     for (let i = 0; i < n; i++){
//         for(let j = n - 1; j >= 0 ; j--){
//             subArr.push((i+1) * n - j)
//         }
//         arr.push(subArr)
//         subArr = []
//     } 
//     return arr
// }

// function matrix(n) {
//     let results = []
//     let count = 0
//     for (let i = 0; i < n; i++) {
//         results.push([])
//     }

//     //first row
//     for (let row = 0; row < n; row++) {
//         if (row !== n) {
//             count++
//             results[0].push(count)
//         } else {
//             break;
//         }
//     }

//     //last column
//     for (let column = 1; column < n; column++) {
//         if (column !== n) {
//             count++
//             results[column].push(count)
//         } else {
//             break;
//         }
//     }

//     //bottom row
//     for (let row = n - 1; row > 0; row--) {
//         if (row !== -1) {
//             count++
//             results[n-1].unshift(count)
//         } else {
//             break;
//         }
//     }

//     //first column
//     for (let column = n - 2; column > 0; column--) {
//         if (column !== 0) {
//             count++
//             results[column].unshift(count)
//         } else {
//             break;
//         }
//     }

//     //next row
//     for (let row = 1; row < n; row++) {
//         if (row !== n - 1) {
//             count++
//             results[1].splice(row, 0, count)
//         } else {
//             break;
//         }
//     }

//     for (let column = 2; column < n; column++) {
//         if (column !== n - 1) {
//             count++
//             results[column].splice(results[column].length - 1, 0, count)
//         } else {
//             break;
//         }
//     }

//     for(let row = n - 2; row > 0; row--) {
//         if (row !== 1) {
//             count++
//             results[n-2].splice(row - 1, 0 ,count)
//         } else {
//             break;
//         }
//     }
//     // console.log(results)
//     return results
// }

function matrix(n) {
    const results = []

    for (let i = 0; i < n; i++) {
        results.push([])
    }

    let counter = 1
    let startColumn = 0
    let endColumn = n - 1
    let startRow = 0
    let endRow = n - 1

    while (startColumn <= endColumn && startRow <= endRow) {
        //Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter
            counter++
        }
        startRow++
        
        //Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter
            counter++
        }
        endColumn--

        //Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter
            counter++
        }
        endRow--

        //Start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter
            counter++
        }
        startColumn++
    }
    return results
}

module.exports = matrix;
