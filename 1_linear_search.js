const array = [1, 2, 3, 8, 5, 4, 3, 2, 1, 10]
let count = 0

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count++
        if (array[i] === item) {
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 10));
console.log('count = ', count)