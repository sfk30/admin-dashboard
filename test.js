// function simpleArraySum(ar) {
//     let sum = 0
//     const n = ar.length
//     for (i=0; i<n; i++) {
//         sum += ar[i]
//     }
//     return sum
// }

// function simpleArraySum(ar) {
//     return ar.reduce((total, nextnum) => 
//         total + nextnum, 0)
// }


// console.log(simpleArraySum([1,2,3]))

// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort(function(a, b){return a-b}));

// console.log(points.sort((a,b) => a - b));

// console.log(points.sort((a,b) => a > b ? 1 : -1));

// this is the order for ascending (smallest to biggest)

// console.log(points.sort((a,b) => a > b ? -1 : 1));

//this is the order for descending (biggest to smallest)


// take a = [5,6,7] and b = [3,6,10], alice points = 0, bob points = 0, if a[i] > b[i] alicepoints +=1 else if b[i] > a[i] bobpoints += 1 else return new arr = [alicepoints, bobpoints] return new arr


// function compareTriplets(a, b) {
//     let a_points = 0
//     let b_points = 0
//     for (let i = 0 ; i < 3 ; i++) {
//         if (a[i] > b[i]) {
//             a_points += 1
//         } else if (a[i] < b[i]) {
//             b_points += 1
//         }
//     }
//     const results = [a_points, b_points]
//     return results
// }

// console.log(compareTriplets([5,6,7], [3,6,10]))

// function aVeryBigSum(ar) {
//     return ar.reduce((total, nextnum) => total + nextnum, 0)
// }

// console.log(aVeryBigSum([5, 10000, 10120]))


// function diagonalDifference(arr) {
//     let d_1 = 0
//     let d_2 = 0
//     const n = arr.length
//     for (let i = 0; i < n; i ++) {
//         d_1 += arr[i][i]
//         d_2 += arr[i][n - i - 1]
//     }

//     return Math.abs(d_1 - d_2)
// }

// console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]))


function plusMinus(arr) {
    const n = arr.length
    let posNumbers = 0
    let negNumbers = 0
    let zerNumbers = 0
    for (let i = 0; i < n; i ++) {
        if (arr[i] > 0) {
            posNumbers += 1
        }   else if (arr[i] < 0) {
            negNumbers += 1
        }   else {
            zerNumbers +=1
        }
    }
    console.log((posNumbers/n).toFixed(6))
    console.log((negNumbers/n).toFixed(6))
    console.log((zerNumbers/n).toFixed(6))
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
