// Поиск в ширину в графе

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

let count = 0

function widthSearch(graph, start, end) {
    let queue = []
    queue.push(start)

    while (queue.length > 0) {
        count++
        const current = queue.shift()
        if (!graph[current]) {
            graph[current] = []
        }
        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
    return false
}

console.log(widthSearch(graph, 'a', 'q'));
console.log('count = ', count)