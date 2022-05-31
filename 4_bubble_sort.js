const array = [0, 3, 2, 5, 7, 6, 4, 3, 2, 1, 7, -1, -5, 23, 6, 7, 25, 3, 32]
let count = 0

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; i < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count++
        }
    }
    return array
}


console.log(bubbleSort(array))
console.log('count = ', count);