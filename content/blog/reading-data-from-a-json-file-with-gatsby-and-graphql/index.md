---
title: Reading Data From A JSON File With Gatsby & GraphQL
date: "2019-01-14"
slug: "/reading-data-from-a-json-file-with-gatsby-and-graphql"
description: Have you ever wanted to read data from a JSON file with Gatsby? Now you can!
headerImage: "https://cdn-images-1.medium.com/max/800/1*_GoJNtJ544CcXgLtkrQ7Lg.png"
---

<img src="https://cdn-images-1.medium.com/max/800/1*_GoJNtJ544CcXgLtkrQ7Lg.png" />

**Goal:** Use `gatsby-transformer-json` to read data from a local JSON file and dynamically generate list items in a React component.

**Use Case:** I have a Sidebar React component that takes in an array of sidebar list items (objects) and dynamically generates list items from their data. I don't want to hard-code all of the sidebar values, as this can quickly become unruly. Thus, I want to have a JSON file where I can quickly add a new list item and have it propagate to the UI.

_This blog assumes you already have a Gatsby project created. You can use the [Gatsby CLI](https://www.gatsbyjs.org/) to quickly spin up a new application. My sidebar.js component is being imported into the index.js starter file that is generated after running the CLI command._

1. Create the directory and JSON file where you will store your JSON data. Mine will live inside `src/data/sidebarItems.json`.

My JSON data has the following structure:

![Code](https://cdn-images-1.medium.com/max/800/1*vKxpJ3gse6Bo5W1KxOcmFA.png)

2. Next, install `gatsby-transformer-json` and `gatsby-source-filesystem`.

```
npm install gatsby-transformer-json gatsby-source-filesystem --save
```

3. Inside of the `gatsby-config.js` file, add the following:

![Code](https://cdn-images-1.medium.com/max/800/1*693UhT8gmukxqvxEkxhlow.png)

The `path` value will be the link to the folder which contains your JSON file.

4. Next, open the component you want to use your data. Mine lives inside of `sidebar.js`

First, import `StaticQuery` and `graphql` from `gatsby`. We'll need these to access our JSON data.

![Code](https://cdn-images-1.medium.com/max/800/1*j_xHIft1jC-FX__9BaS6TA.png)

We'll use Gatsby's [Static Query](https://www.gatsbyjs.org/docs/static-query/) to wrap a [stateless functional React component](https://itnext.io/react-component-class-vs-stateless-component-e3797c7d23ab).

Inside of the `<StaticQuery />` elements, add two attributes: `query` and `render`.

# Query Attribute

The value of the query attribute will look like this:

![Code](https://cdn-images-1.medium.com/max/800/1*eiTBvfkzaRlA_4Ap9RYUfw.png)

We're creating a query called `SidebarItemsQuery` (you can name the query however you like; I choose to name it `{dataReturned}Query`). The data returned will be the sidebar items, so the query name will be `SidebarItemsQuery`.

Next we have the `allSidebarItemsJson`. You must name this in accordance with your JSON file name. Since I had `SidebarItems.json`, this is called `allSidebarItemsJson`. This is the default naming convention, however you can change this inside of `gatsby-config.js` (see "Chaning the Default gatsby-transformer-json Naming Convention" section at the end for more details).

Inside of that we have `edges`, `node`, and then the values we want to return from our query. In my case, since I'm creating a sidebar with a list of links to different content, I have a label and a link (See "GraphQL Nomenclature" section below for a high-level definition of edges and nodes).

# Render Attribute

Now that we have our query, let's define the render attribute. This attribute will take one parameter: the data from the query we just wrote. It will return the JSX we want the stateless functional component to render.

_Note: You can wrap your JSX in empty brackets `<>...</>` as a shorthand for a [React fragment](https://reactjs.org/docs/fragments.html). This allows you to return multiple child components without appending additional nodes to the DOM._

![Code](https://cdn-images-1.medium.com/max/800/1*R_nbNg-kG2m5CIaHiLrYHA.png)

This is the same as writing this:

![Code](https://cdn-images-1.medium.com/max/800/1*6kjAsbQwcXEAJ7-V6w3pjA.png)

Now, I want to iterate over these nodes and create an `<h1>` for each label; it might look something like this. I've created a `getSidebarLabels` helper function, which takes in the data and iterates over it to create three `<li>` items.

![Code](https://cdn-images-1.medium.com/max/800/1*8z2WjMlR_GJVa6MMhV-4Eg.png)

The helper function is as follows:

![Code](https://cdn-images-1.medium.com/max/800/1*0VdQ2FVDtP3_L5Q4iYJCTQ.png)

And just as we'd expect, three list items are appended to the DOM.

![UI](https://cdn-images-1.medium.com/max/800/1*RFYcaCmQSFKIZhQi_M0_JA.png)

Here is the full code for the stateless functional component in `sidebar.js`.

![Code](https://cdn-images-1.medium.com/max/800/1*ki5QO0Q9j-Wb6LFJfNb9Zw.png)

# GraphQL Nomenclature

[GraphQL](https://graphql.org/learn/) uses graphs to represent data. You can picture it to look something like this:

![Graphql](https://cdn-images-1.medium.com/max/800/1*e72Er_KPHQtHtb92TBRk7g.png)

**Edges:** The lines that connect different nodes in the graph and represent a relationship.

**Nodes:** Records or data.

Let's take the example of a blogging website like Medium. Nodes, in this use case, can be thought of as blog posts or users.

![Graphql](https://cdn-images-1.medium.com/max/800/1*tAd1ZPpiNUKaQDh_GS-P3Q.png)

_I am not an expert on GraphQL; I'm still learning! Feel free to leave a comment down below if I misrepresented something._

# Changing the Default gatsby-transformer-json Naming Convention

To change the JSON query, head over to `gatsby-config.js`, and replace the `"gatsby-transformer-json"` line with the object below.

Inside of the options object, update the `typeName` key; this can be any string value. Here, we've put the static value of `Json`, although it's important to note that this is just a string value, so you could call it Cats if you'd like.

![Code](https://cdn-images-1.medium.com/max/800/1*tunJXAiR82_PwusAV-Axyw.png)

Now, inside of the file where we created the GraphQL query (`sidebar.js` in my case), reference the newly named `typeName` value in the query with `all{typeName}`.

![Code](https://cdn-images-1.medium.com/max/800/1*llQsOLJBZgBDFVrNhutDsA.png)

---

Now you know how to use `gatsby-transformer-json` to read data from a local JSON file. I primarily wrote this blog post for my own benefit (I'll probably need to reference it later), so there may be some minor errors. If you find any, please let me know in the comments below. :)
