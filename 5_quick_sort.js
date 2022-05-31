const array = [0, 3, 2, 5, 7, 6, 4, 3, 2, 1, 7, -1, -5, 23, 6, 7, 25, 3, 32]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let centerIndex = Math.floor(array.length / 2)
    let center = array[centerIndex]
    let less = []
    let more = []
    for (let i = 0; i < array.length; i++) {
        count++
        if (i === centerIndex)
            continue

        if (array[i] < center) {
            less.push(array[i])
        } else {
            more.push(array[i])
        }
    }
    return [...quickSort(less), center, ...quickSort(more)]

}

console.log(quickSort(array))
console.log('count = ', count);