---
title: Breaking Down JavaScript Solutions To Common Algorithmic Questions (Part 1)
date: "2019-02-20"
slug: "/breaking-down-javascript-solutions-to-common-algorithmic-questions-part-1"
description: Have you ever struggled to develop an algorithm solution on a technical interview?
headerImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
draft: false
---

<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" />

Have you ever struggled to develop an algorithm solution on a technical interview? In this short tutorial, we'll break down three top algorithm coding questions, starting with the brute force method (step-by-step but not necessarily performant) and transitioning to a more optimized, elegant solution.

If you find another solution, feel free to post it in the comments!

# Reverse a string

**Task**
Given a string, return the reverse of it.

**Solution 1**
We can use the `string.substring()` method to take each letter of the `str` parameter, and append it to a new string. The [substring method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) takes one required parameter and one optional parameter.

The first parameter is the index from which you want the substring to start. This is _inclusive_ meaning if you write `myString.substring(1)`, the output will include the first character.

The second (optional) parameter is the ending index. This parameter is _not_ inclusive. This means that your substring will include all characters _until_ this index plus every remaining character to the right of that index.

Another string method we could use in the brute force method would be the `string.charAt()` method. The [charAt method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) takes one parameter: the index of the character you want to return.

Let's write two brute-force algorithms for returning the reverse of a string.

```javascript
// Method 1: Substring
function reverseString(str) {
  let reversedString = ""

  /* Loop through this process for each character in the str parameter
    In order to get the reverse, we'll initialize i to str.length
    Add each character, starting from the end, to the new string.
   */
  for (let i = str.length; i > 0; i--) {
    reversedString += str.substring(i, i - 1)
  }
  return reversedString
}

// Method 2: CharAt
function reverseString(str) {
  let reversedString = ""

  /* Loop through this process for each character in the str parameter
    In order to get the reverse, we'll initialize i to str.length - 1
    while i is greater than or equal to 0.
    Add each character, starting from the end, to the new string.

   */
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str.charAt(i)
  }
  return reversedString
}
```

**Solution 2**
One of the quickest inline ways to solve this problem is to split each character in the string into an array index, reverse the items within the array, and turn the items in each index into a concatenated string.

We'll use the following methods:

- `string.split()` [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) which splits each character into an array index.
- `array.reverse()` [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) which reverses an array in place.
- `array.join()` [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) which concatenates all array values into a string.

You can chain these three functions together for an elegant, inline solution.

```javascript
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("")
}
```

---

# Longest Word

**Task**
Return the length of the longest word in the provided sentence.

**Solution 1**
For the first attempt, you can use the `string.split(' ')` method to break the individual words within a sentence into array indeces. _This tutorial will not account for punctuation, however you could solve for this with a regular expression_.

Next, we can iterate through each index of the array and count the number of letters in each word. We can keep track of the longest word value in a variable. If the current word value is larger than the maximum word value currently saved, replace it! Then, just return the variable containing the longest word.

You can loop through the array using a for-loop or the `array.forEach()` method. I prefer the latter, but I've included both below.

```javascript
// Solution with for-loop
function findLongestWordLength(str) {
  let maxVal = 0

  const wordArr = str.split(" ")

  for (let i = 0; i < wordArr.length; i++) {
    let word = wordArr[i]
    if (word.length > maxVal) {
      maxVal = word.length
    }
  }
  return maxVal
}

// Solution with array.forEach method
function findLongestWordLength(str) {
  let maxVal = 0

  const wordArr = str.split(" ")

  wordArr.forEach(word => {
    if (word.length > maxVal) {
      maxVal = word.length
    }
  })
  return maxVal
}
```

**Solution 2**
To optimize this solution, we will still use the `string.split()` method to separate each word into an array index.

Next, we're going to use the `array.map()` [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to carry out some type of expression on the value within each array index. This will return a completely new array, so we'll save that to a new variable.

For each item in the array, return the length of the string and save it in a new array called `arrOfLengths`.

Finally, we can use the `Math.max(...spreadOperator)` [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) with a [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in order to return the integer value for the longest string in a sentence.

```javascript
function findLongestWordLength(str) {
  const arrOfWords = str.split(" ")
  const arrOfLengths = arrOfWords.map(item => item.length)

  return Math.max(...arrOfLengths)
}
```

---

# Array Of Largest Sub-Array Values

**Task**
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

```
[1,2,3,4]
[5,18,0,12]
[3,5,12,5]
[28,9,2,34]

Should return => [4,18,12,34]
```

**Solution 1**
For the first pass through, we can start with a nested for-loop.

For each item in the outer array, go through its sub array and find the largest value, then push that into a new array.

```javascript
// For loop
function largestOfFour(arr) {
  let arrayOfMaxValues = []
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i]
    let maxSubArrVal = 0
    for (let j = 0; j < subArr.length; j++) {
      let currentValue = subArr[j]
      if (currentValue > maxSubArrVal) {
        maxSubArrVal = currentValue
      }
    }
    arrayOfMaxValues.push(maxSubArrVal)
  }
  return arrayOfMaxValues
}

// For each method
function largestOfFour(arr) {
  let arrayOfMaxValues = []
  arr.forEach(subArr => {
    let maxSubArrVal = 0
    subArr.forEach(item => {
      if (item > maxSubArrVal) {
        maxSubArrVal = item
      }
    })
    arrayOfMaxValues.push(maxSubArrVal)
  })
  return arrayOfMaxValues
}
```

**Solution 2**
We can use the `Math.max(...spreadOperator)` method with the `array.map()` method to loop over each item in the outer array, return the max value from within the sub-array, and return that newly created array directly.

```javascript
function largestOfFour(arr) {
  return arr.map(subArr => Math.max(...subArr))
}
```

---
