---
title: Bubble Sort In JavaScript
date: "2019-05-10"
slug: "/bubble-sort-in-js"
description: Bubble Sort is one of the most widely discussed algorithms, simply because of its lack of efficiency for sorting arrays. If an array is already sorted, Bubble Sort will only pass through the array once (using concept two below), however the worst case scenario is a run time of O(N²), which is extremely inefficient.
headerImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--07zcSdEZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--eW0HHRf3--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/33xa7g8q5p9r7nmzhgbo.png"
draft: false
---

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--07zcSdEZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--eW0HHRf3--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/33xa7g8q5p9r7nmzhgbo.png" />

Bubble Sort is one of the most widely discussed algorithms, simply because of its lack of efficiency for sorting arrays. If an array is already sorted, Bubble Sort will only pass through the array once (using concept two below), however the worst case scenario is a run time of O(N²), which is extremely inefficient.

Even former President Barack Obama [recognizes the inefficiency](https://www.youtube.com/watch?v=k4RRi_ntQc8) of Bubble Sort.

When we chart the growth-rate of O(N²), we see that, compared to other sorting algorithms like Merge Sort, which is O(N Log N), it grows at a much quicker scale.

![Chart](https://cdn-images-1.medium.com/max/1600/0*DYHEh5fB-3WzQSJO.gif)

Given the atrocity that is Bubble Sort, it’s still important to understand the algorithm and decipher why it’s so poor.

Let’s delve into two concepts for coding Bubble Sort.

# Concept 1

- Iterate through the array and check each element against the next element in the array.
- If the current element is larger than the next element, swap them.
- If it’s not greater, move the pointers up and compare the next two elements.
- Once we reach the end of the array, we know that the largest element is in the last position.
- Repeat this process N times where N is the length of the array, and each time, iterate up to the last-sorted element.

### Visualizing Concept 1

Let’s take a look at how this would be run on an array of length 6.

![Bubble Sort 1](https://cdn-images-1.medium.com/max/2400/1*aR2lKzbQtjc2afMbC8cwBg.png)

We need to have two pointers (two nested loops) for concept one. Each time we iterate through, the upper bound decreases by one, as we know that this index contains a sorted value.

```js
function bubbleSortConcept1(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
  }
}
```

# Concept 2

- Iterate through the array and check each element against the next element in the array.
- If the current element is greater than the next item, swap them.
- Indicate that a swap has taken place.
- If a swap occurred, loop through the array again.
- We know that the array is sorted when no swaps have occurred.

![Bubble sort 2](https://cdn-images-1.medium.com/max/2400/1*s1TDbwc9WnF8QBOxObkm7g.png)

We only need one pointer with this method, as we’re using a variable to store a Boolean, indicating whether or not a swap occurred. In contrast to concept one, this concept requires us to iterate through each item in the array each time we pass through it.

```js
function bubbleSortConcept2(arr) {
  let swapped

  do {
    swapped = false
    console.log(arr)
    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        // Save the value to a variable so we don't lose it
        let temp = item
        arr[index] = arr[index + 1]
        arr[index + 1] = temp
        swapped = true
      }
    })
  } while (swapped)
}
```

# Run Time

Bubble Sort is one of the most inefficient sorting algorithms coming in at O(N²). In the worst case scenario, we will have to compare each element against every other element in the array, hence O(N²).
