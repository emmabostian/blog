---
title: Creating Graphs With JavaScript
date: "2019-05-07"
slug: "/creating-graphs-with-js"
description: Graphs are a data structure comprised of a collection of nodes with edges. A graph can be directed or undirected.
headerImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--Bi5rNnIZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--q1ZcWtbG--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/of29jor31c5t2prhhpnn.png"
draft: false
---

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Bi5rNnIZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--q1ZcWtbG--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/of29jor31c5t2prhhpnn.png" />

Graphs are a data structure comprised of a collection of nodes with edges. A graph can be directed or undirected.

A **directed** graph contains edges which function similar to a one-way street. The edge flows from one node to another.

For example, you might have a graph of people and movies where each person can have several favorite movies but movies do not have a favorite person.

![Directed graph](https://cdn-images-1.medium.com/max/1600/1*bH2AHhFt9P_Tb8Opp6bhLQ.png)

An **undirected graph** contains edges which flow bi-directionally, similar to a two-lane road with traffic going in both directions.

For example, you might have a graph of pets where each pet has an owner and each owner has a pet. _Note: The bi-directional arrows represent one edge, but for the sake of explicitness, I’ve drawn two arrows._

![Undirected Graph](https://cdn-images-1.medium.com/max/1600/1*9x3Dhxs8Zrtfricvf1Cysw.png)

There is no clear hierarchy of information in a graph.

# Methods

We’re going to build a graph of people and ice cream flavors. It will be a directed graph, as people can like certain flavors, but flavors do not like people.

We are going to create three classes:

- `PersonNode`
- `IceCreamFlavorNode`
- `Graph`

### PersonNode

The `PersonNode` class will take in one argument: a person’s name. This will serve as its identifier.

The `PersonNode` constructor will contain two properties:

- `name`: The unique identifier
- `favoriteFlavors`: An array of IceCreamFlavorNodes

Additionally, the `PersonNode` class will contain one method: `addFlavor`. This will take in one argument, an `IceCreamFlavorNode`, and add it to the `favoriteFlavors` array.

The class definition looks like this:

```js
class PersonNode {
  constructor(name) {
    this.name = name
    this.favoriteFlavors = []
  }

  addFlavor(flavor) {
    this.favoriteFlavors.push(flavor)
  }
}
```

### IceCreamFlavorNode

The `IceCreamFlavorNode` class will take in one argument: the ice cream flavor. This will serve as its identifier.

This class doesn’t need to contain any methods, as this is an undirected graph, with data flowing from the person to the flavors, but not backwards.

The class definition looks like this:

```js
class IceCreamFlavorNode {
  constructor(flavor) {
    this.flavor = flavor
  }
}
```

### Graph

The `Graph` class won’t take in any arguments, but its constructor will contain three properties:

- `peopleNodes`: An array of PersonNodes.
- `iceCreamFlavorNodes`: An array of IceCreamFlavorNodes
- `edges`: An array containing the edges between PersonNodes and IceCreamFlavorNodes.

The Graph class will contain six methods:

- `addPersonNode(name)`: Takes in one argument, a person’s name, creates a new `PersonNode` with this name, and pushes it to the `peopleNodes` array.
- `addIceCreamFlavorNode(flavor)`: Takes in one argument, an ice cream flavor, creates a new `IceCreamFlavorNode` with this flavor, and pushes it to the `iceCreamFlavorNodes` array.
- `getPerson(name)`: Takes in one argument, a person’s name. and returns the node for that person.
- `getFlavor(flavor)`: Takes in one argument, an ice cream flavor. and returns the node for that flavor.
- `addEdge(personName, flavorName)`: Takes in two arguments, a person’s name and an ice cream flavor, retrieves both nodes, adds the flavor to the person’s `favoriteFlavors` array, and pushes the edge to the edges array.
- `print()`: Simply prints out each of the people in the `peopleNodes` array and their favorite ice cream flavors.

The class definition looks like this:

```js
class Graph {
  constructor() {
    this.peopleNodes = []
    this.iceCreamFlavorNodes = []
    this.edges = []
  }

  addPersonNode(name) {
    this.peopleNodes.push(new PersonNode(name))
  }

  addIceCreamFlavorNode(flavor) {
    this.iceCreamFlavorNodes.push(new IceCreamFlavorNode(flavor))
  }

  getPerson(name) {
    return this.peopleNodes.find(person => person.name === name)
  }

  getFlavor(flavor) {
    return this.iceCreamFlavorNodes.find(flavor => flavor === flavor)
  }

  addEdge(personName, flavorName) {
    const person = this.getPerson(personName)
    const flavor = this.getFlavor(flavorName)
    person.addFlavor(flavor)
    this.edges.push(`${personName} - ${flavorName}`)
  }

  print() {
    return this.peopleNodes
      .map(({ name, favoriteFlavors }) => {
        return `${name} => ${favoriteFlavors
          .map(flavor => `${flavor.flavor},`)
          .join(" ")}`
      })
      .join("\n")
  }
}
```

# Visualizing Data

Now that we have our three classes, we can add some data and test it out:

```js
const graph = new Graph(true)
graph.addPersonNode("Emma")
graph.addPersonNode("Kai")
graph.addPersonNode("Sarah")
graph.addPersonNode("Maranda")
graph.addIceCreamFlavorNode("Chocolate Chip")
graph.addIceCreamFlavorNode("Strawberry")
graph.addIceCreamFlavorNode("Cookie Dough")
graph.addIceCreamFlavorNode("Vanilla")
graph.addIceCreamFlavorNode("Pistachio")

graph.addEdge("Emma", "Chocolate Chip")
graph.addEdge("Emma", "Cookie Dough")
graph.addEdge("Emma", "Vanilla")
graph.addEdge("Kai", "Vanilla")
graph.addEdge("Kai", "Strawberry")
graph.addEdge("Kai", "Cookie Dough")
graph.addEdge("Kai", "Chocolate Chip")
graph.addEdge("Kai", "Pistachio")
graph.addEdge("Maranda", "Vanilla")
graph.addEdge("Maranda", "Cookie Dough")
graph.addEdge("Sarah", "Strawberry")

console.log(graph.print())
```

Here’s what our directed graph looks like:

![Directed graph](https://cdn-images-1.medium.com/max/1600/1*8w3ZPB-SyPCszp4errksnQ.png)

---

If you’d like to see the code in its entirety, check out my [CodePen](https://codepen.io/emmawedekind/pen/mYJPbO?editors=0011).
