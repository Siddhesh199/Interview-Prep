//Graph

class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    //Adds a vertex in the graph
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    //Adds an undirected edge between the two vertices
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    //Removes the edge between the two vertices
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }

    //Removes the vertex and the edges connected to it
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}


