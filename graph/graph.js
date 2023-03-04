class Graph {
    constructor() {
        this.elements = {}
    }

    vertex(vertex) {
        if (!this.elements[vertex]) {
            this.elements[vertex] = new Set()
        }
    }

    edge(vertex1, vertex2) {
        if (!this.elements[vertex1]) {
            this.vertex[vertex1]
        }
        if (!this.elements[vertex2]) {
            this.vertex[vertex2]
        }

        this.elements[vertex1].add(vertex2)
        this.elements[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.elements[vertex1].delete(vertex2)
        this.elements[vertex2].delete(vertex1)
    }

    remVertex(vertex) {
        if (!this.elements[vertex]) {
            return
        }

        for (let elements of this.elements[vertex]) {
            this.removeEdge(vertex, elements)
        }

        delete this.elements[vertex]
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.elements[vertex1].has(vertex2) &&
            this.elements[vertex2].has(vertex1)
        )
    }



    display() {
        for (let vertex in this.elements) {
            console.log(vertex + "-->" + [...this.elements[vertex]]);
        }
    }
}

const graph = new Graph()
graph.vertex('a')
graph.vertex('b')
graph.vertex('c')
graph.vertex('d')

graph.edge('a', 'b')
graph.edge('b', 'c')
graph.edge('c', 'd')

graph.display()

// graph.display()

graph.bfs('a')

