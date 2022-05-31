const array = [0, 3, 2, 5, 7, 6, 4, 3, 2, 1, 7, -1, -5, 23, 6, 7, 25, 3, 32]
let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count++
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(array))
console.log('count = ', count);