# Day 05 – HTML Forms & DOM Manipulation

## Overview

On Day 5 of my #100DaysOfLearning journey, I built a **payment card form** and learned how to handle form data using **JavaScript DOM manipulation**.

## What I Learned

### 1. Building an HTML Form

I created a form that collects payment card details using different input types:

* `input type="number"` – for the card number and CVV
* `input type="text"` – for the card holder's name
* `select` elements – for choosing the expiration month and year

I also learned how to group related fields together, like placing the expiration date and CVV side by side.

### 2. Styling the Form

I styled the form and its inputs, including:

* Giving inputs and selects a consistent padding and border with rounded corners
* Using Flexbox to arrange the fields in a column layout
* Positioning a **card image** so it floats above the form using `position: absolute` and `transform`

### 3. Displaying Data in a Table

I added a **table** below the form to display the submitted card details. The table includes:

* A styled header row with columns for card number, card holder, expiration date, and CVV
* Alternating row colors using `nth-child(even)`
* A hover effect on table rows

### 4. JavaScript DOM Manipulation

I used JavaScript to make the form interactive:

* `getElementById()` – to read the values entered in the form
* `addEventListener("click", ...)` – to handle the submit button click
* `preventDefault()` – to stop the page from reloading on submit
* `createElement("tr")` and `innerHTML` – to create a new table row and insert the card details into it
* `appendChild()` – to add the new row to the table body
* Clearing all input fields after submission

## Practical Work

During the session, I:

1. Created a payment card form with inputs for card number, card holder, expiration, and CVV.
2. Styled the form and floated a card image above it.
3. Added a table to display submitted card details.
4. Used JavaScript to read the form values, add a new row to the table, and clear the form after submitting.

## What I Practiced

- Creating HTML forms with different input types and selects
- Styling forms and tables with CSS
- Positioning elements with `position: absolute` and `transform`
- JavaScript DOM manipulation (`getElementById`, `createElement`, `innerHTML`, `appendChild`)
- Handling form submit events with `preventDefault()`

## Key Takeaway

The main takeaway from Day 5 was learning how JavaScript connects a form to the rest of the page. I learned that submitting a form doesn't have to reload the page — with `preventDefault()` and DOM manipulation, I can capture the data, add it to the page dynamically, and keep the experience smooth.

**Day 05 completed.**
