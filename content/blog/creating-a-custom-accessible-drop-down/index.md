---
title: Creating A Custom, Accessible Drop Down
date: "2019-02-28"
slug: "/creating-a-custom-accessible-drop-down"
description: Creating custom components is hard. You have to override a lot of default browser styling, and often this can be tedious.
headerImage: "https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
---

<img src="https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />

_Note: I'm still learning accessibility, so if you find a flaw in my method, please let me know in the comments below!_

Creating custom components is hard. You have to override a lot of default browser styling, and often this can be tedious. And in some instances, it's impossible to style the HTML elements. This is the case with the select drop down.

It's impossible to style the select drop down menu, because we don't have the ability to wrap the set of `<option>` elements in a container (which is needed in order to absolutely position the list items against a parent element).

Thus, we must "hack" our way to creating a drop down. Unfortunately, this typically leads to a lack of accessibility.

In this tutorial, we'll learn how to create a custom select drop down, while abiding by the W3C accessibility standards.

# Step 1 - HTML

Here is the drop down we're going to be creating:
{% codepen https://codepen.io/emmawedekind/pen/eXNppG %}

Traditionally, when creating a select drop down, you would use the following:

```html
<select>
  <option value="option-1">Option 1</option>
  <option value="option-2">Option 2</option>
  <option value="option-3">Option 3</option>
</select>
```

The issue with using the `<select>` element is that you are unable to wrap the child `<option>` elements in a container. Why would we need to wrap these elements in a container? In order to position the drop down list underneath the input box.

In our case, we want the list items, `<option>` elements, to be positioned underneath the `<select>` box. The browser renders the menu items, by default, as an overlay:

![What we want vs. what we get](https://user-images.githubusercontent.com/7671983/53564458-44901e80-3b57-11e9-81af-ac25c9a34e34.png)

To relatively position a child element in relation to a parent element, such is the case with the custom drop down menu, you must set the following CSS properties:

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  left: 0;
}
```

You might be wondering: "Can't you re-write the HTML to the following (using the CSS above)?

```html
<select class="parent">
  <div class="child">
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </div>
</select>
```

The answer is unfortunately **no**. You cannot place a `<div>` inside of a `<select>`.

{% codepen https://codepen.io/emmawedekind/pen/ZPbapL %}

So we must create an accessible workaround.

### Creating A Custom Select

Since we can't use the `<select>` element, I'm electing to use a series of `<ul>` and `<li>` elements.

The structure looks something like this:

```html
<ul class="dropdown">
  <li class="dropdown__label">
    Label
  </li>

  <!-- The "select" drop down -->
  <li role="button" id="dropdown__selected" tabindex="0">Option 1</li>

  <!-- Icon -->
  <svg
    class="dropdown__arrow"
    width="10"
    height="5"
    viewBox="0 0 10 5"
    fill-rule="evenodd"
  >
    <path d="M10 0L5 5 0 0z"></path>
  </svg>

  <li class="dropdown__list-container">
    <ul class="dropdown__list">
      <li class="dropdown__list-item" id="option-1">Option 1</li>
      <li class="dropdown__list-item" id="option-2">Option 2</li>
    </ul>
  </li>
</ul>
```

This is pretty simple.

- We have the entire component wrapped in an unordered list.
- The label is a list item.
- The select is also a list item.
- Next we have the drop down arrow icon. And finally, the list item menu is wrapped in a sub-unordered list.

But... this isn't accessible. If a visually impaired user, with the help of assistive technology, visits this page, they won't have a clue that this is a drop down or how to interact with it. Additionally, it's completely inaccessible by keyboard.

### Making The Custom Element Accessible

A custom element must function the same as the semantic elements in regards to keyboard navigation and screen reader accessibility.

Here's what we need in order to make this screen reader accessible:

- The drop down label must have an id. This is because we'll be using `aria-labelledby` on the `<li>` which will function as a select drop down, and this attribute accepts the `id` of the HTML which labels it. I'll give it the id of `dropdown-label`.
- The `<li>` functioning as a select drop down must have a `role="button"` as well as an `aria-labelledby="dropdown-label"`.
- The `<svg>` element needs additional information to describe what it is. Thus, we can add a `<title>Open drop down</title>` as the fist child of the SVG.
- The drop down list container needs to inform the user whether or not the menu is expanded or not. We can add an `aria-expanded="false"` attribute to communicate this information. This must be updated with JavaScript as the state changes.

Here's what we need in order to make this keyboard accessible:

- The `<li>` which functions as a select drop down needs a `tabindex="0"` so the user can focus on the element.
- All of the `<li>` in the drop down menu also need `tabindex="0"`.

Here's the accessible HTML:

```html
<ul class="dropdown">
  <li id="dropdown-label" class="dropdown__label">
    Label
  </li>

  <li
    role="button"
    aria-labelledby="dropdown-label"
    id="dropdown__selected"
    tabindex="0"
  >
    Option 1
  </li>

  <svg
    class="dropdown__arrow"
    width="10"
    height="5"
    viewBox="0 0 10 5"
    fill-rule="evenodd"
  >
    <title>Open drop down</title>
    <path d="M10 0L5 5 0 0z"></path>
  </svg>
  <li aria-expanded="false" role="list" class="dropdown__list-container">
    <ul class="dropdown__list">
      <li class="dropdown__list-item" tabindex="0" id="option-1">
        Option 1
      </li>
      <li class="dropdown__list-item" tabindex="0" id="option-2">
        Option 2
      </li>
    </ul>
  </li>
</ul>
```

We also need to add some JavaScript logic to ensure that the component functions the way a native select drop down would. Here is the expected interaction:

- A user can focus on the element with their keyboard.
- A user can open the select drop down by pressing the Spacebar or Enter keys.
- A user can navigate list item elements with the up and down arrow keys, or the Tab key.
- A user can change the selection by focusing on a list item and pressing Enter.
- A user can dismiss the drop down by pressing Escape.
- Once a user selects a list item, the list should close.

So now let's implement it.

### Implementing Keyboard Accessibility With JavaScript

First, we need to grab the keycodes for the Spacebar, Enter key, up and down arrow keys, and the Escape key. (I've seen the Spacebar represented as 0 and 32, so I set it to both to be safe).

```javascript
const SPACEBAR_KEY_CODE = [0, 32]
const ENTER_KEY_CODE = 13
const DOWN_ARROW_KEY_CODE = 40
const UP_ARROW_KEY_CODE = 38
const ESCAPE_KEY_CODE = 27
```

Next, there are a few elements we know we'll need. I'll save those to constants. We'll also want to keep track of the list item ids, so I'll declare an empty array which we'll fill up.

```javascript
const list = document.querySelector(".dropdown__list")
const listContainer = document.querySelector(".dropdown__list-container")
const dropdownArrow = document.querySelector(".dropdown__arrow")
const listItems = document.querySelectorAll(".dropdown__list-item")
const dropdownSelectedNode = document.querySelector("#dropdown__selected")
const listItemIds = []
```

Next, we need to add some event listeners to our elements to ensure they will respond to user interaction. Don't worry about the functions declared here, we'll get to them soon.

```javascript
dropdownSelectedNode.addEventListener("click", e => toggleListVisibility(e))
dropdownSelectedNode.addEventListener("keydown", e => toggleListVisibility(e))

// Add each list item's id to the listItems array
listItems.forEach(item => listItemIds.push(item.id))

listItems.forEach(item => {
  item.addEventListener("click", e => {
    setSelectedListItem(e)
    closeList()
  })

  item.addEventListener("keydown", e => {
    switch (e.keyCode) {
      case ENTER_KEY_CODE:
        setSelectedListItem(e)
        closeList()
        return

      case DOWN_ARROW_KEY_CODE:
        focusNextListItem(DOWN_ARROW_KEY_CODE)
        return

      case UP_ARROW_KEY_CODE:
        focusNextListItem(UP_ARROW_KEY_CODE)
        return

      case ESCAPE_KEY_CODE:
        closeList()
        return

      default:
        return
    }
  })
})
```

Now let's create some of these functions we just called in the event listeners.
`setSelectedListItem` takes an event and updates the currently selected item in the "select" box.

```javascript
function setSelectedListItem(e) {
  let selectedTextToAppend = document.createTextNode(e.target.innerText)
  dropdownSelectedNode.innerHTML = null
  dropdownSelectedNode.appendChild(selectedTextToAppend)
}
```

`closeList` closes the list and updates the `aria-expanded` value.

```javascript
function closeList() {
  list.classList.remove("open")
  dropdownArrow.classList.remove("expanded")
  listContainer.setAttribute("aria-expanded", false)
}
```

`toggleListVisibility` takes an event. If the Escape key was pressed, close the list. Otherwise, if the user has clicked or if they've pressed the Spacebar or Enter key, toggle the expanded state and update the `aria-expanded` value accordingly. Finally, if the down or up arrow keys were pressed, focus the next list item.

```javascript
function toggleListVisibility(e) {
  let openDropDown =
    SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === ENTER_KEY_CODE

  if (e.keyCode === ESCAPE_KEY_CODE) {
    closeList()
  }

  if (e.type === "click" || openDropDown) {
    list.classList.toggle("open")
    dropdownArrow.classList.toggle("expanded")
    listContainer.setAttribute("aria-expanded", list.classList.contains("open"))
  }

  if (e.keyCode === DOWN_ARROW_KEY_CODE) {
    focusNextListItem(DOWN_ARROW_KEY_CODE)
  }

  if (e.keyCode === UP_ARROW_KEY_CODE) {
    focusNextListItem(UP_ARROW_KEY_CODE)
  }
}
```

`focusNextListItem` takes a direction which is either the const `DOWN_ARROW_KEY_PRESSED` or `UP_ARROW_KEY_PRESSED`. If the user is currently focused on the "select", focus on the first list item. Otherwise we need to find the index of the currently focused list item. This is where the `listItemsId` array comes in handy. Now that we know where in the list the currently focused item is, we can decide what to do.

If the user pressed the down arrow key, and they're not at the last list item, focus on the next list item. If the user pressed the up arrow key, and they're not at the first list item, focus on the previous list item.

```javascript
function focusNextListItem(direction) {
  const activeElementId = document.activeElement.id
  if (activeElementId === "dropdown__selected") {
    document.querySelector(`#${listItemIds[0]}`).focus()
  } else {
    const currentActiveElementIndex = listItemIds.indexOf(activeElementId)
    if (direction === DOWN_ARROW_KEY_CODE) {
      const currentActiveElementIsNotLastItem =
        currentActiveElementIndex < listItemIds.length - 1
      if (currentActiveElementIsNotLastItem) {
        const nextListItemId = listItemIds[currentActiveElementIndex + 1]
        document.querySelector(`#${nextListItemId}`).focus()
      }
    } else if (direction === UP_ARROW_KEY_CODE) {
      const currentActiveElementIsNotFirstItem = currentActiveElementIndex > 0
      if (currentActiveElementIsNotFirstItem) {
        const nextListItemId = listItemIds[currentActiveElementIndex - 1]
        document.querySelector(`#${nextListItemId}`).focus()
      }
    }
  }
}
```

And that's it! You now have a fully compliant keyboard-accessible drop down! I won't be covering the Sass/CSS here, but you're welcome to check it out on [CodePen](https://codepen.io/emmawedekind/pen/eXNppG).
