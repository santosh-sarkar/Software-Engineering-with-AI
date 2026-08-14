# 📚 Web Development Notes — #100DaysOfLearning

> **Learning Path:** Web Basics → Page Structure → HTML → CSS → JavaScript → Browser Storage → Git & GitHub

**Goal:** Build a strong foundation in web development by learning concepts step by step and applying them through practical projects.

---

# 1. 🌐 Web Fundamentals

## What is the Web?

The **World Wide Web (Web)** is a system of interconnected webpages and resources accessed through the Internet using web browsers.

A webpage is generally built using:

* **HTML** → Structure
* **CSS** → Styling
* **JavaScript** → Interactivity and behavior

### Simple Mental Model

```text
HTML       → What is on the page?
CSS        → How does it look?
JavaScript → How does it behave?
```

---

## 3-Tier Architecture

A software system can be divided into three major layers:

### 1. Presentation Tier

The part users interact with.

**Examples:**

* HTML
* CSS
* JavaScript
* React

### 2. Application Tier

Handles business logic and processes requests.

**Examples:**

* Node.js
* Express
* Backend APIs

### 3. Data Tier

Responsible for storing and retrieving data.

**Examples:**

* MongoDB
* MySQL
* PostgreSQL

```text
User
  ↓
Presentation Tier
  ↓
Application Tier
  ↓
Data Tier
```

---

## OSI Model — Application Layer

The **OSI model** has 7 layers.

The **Application Layer (Layer 7)** is the topmost layer and is closest to the applications users interact with.

Web browsers and applications use protocols associated with this layer.

### Common Protocols

* HTTP / HTTPS
* DNS
* FTP
* SMTP

> **Remember:** OSI Layer 7 = Application Layer.

---

## IP Address

**IP** stands for **Internet Protocol**.

An IP address identifies a device or network interface on a network and allows data to be routed to the correct destination.

### Types

**IPv4**

Example:

```text
192.168.1.1
```

**IPv6**

A newer addressing system designed to provide a much larger address space.

---

## CDN

**CDN = Content Delivery Network**

A CDN is a distributed network of servers that delivers website resources from locations closer to users.

### Benefits

* Faster loading
* Reduced latency
* Reduced load on the origin server
* Better performance for users in different locations

---

# 2. 🧩 Page Structure & UI Design

## Understanding a Real Website

Before writing code, analyze how an existing website is structured.

### Example: Spotify

A Spotify-style page can be divided into:

* **Header** → Logo, search, navigation
* **Sidebar / Aside** → Library, playlists
* **Main Content** → Songs, artists, recommendations
* **Footer** → Links and social media

### Key Learning

Don't immediately start writing HTML.

First understand:

> **What are the sections? How are they related?**

---

# 3. 📝 Wireframing

## What is a Wireframe?

A **wireframe** is a simple visual representation of a webpage layout before development begins.

It focuses on:

* Structure
* Placement
* Sections
* Content hierarchy

It does **not** focus heavily on colors, typography, or visual details.

### Tool

**Excalidraw** can be used to create simple wireframes.

### Development Process

```text
Observe
   ↓
Analyze
   ↓
Wireframe
   ↓
HTML
   ↓
CSS
   ↓
JavaScript
```

> **Important:** A wireframe helps you think about the structure before thinking about the code.

---

# 4. 🏗️ HTML

## What is HTML?

**HTML = HyperText Markup Language**

HTML provides the **structure and meaning** of a webpage.

It uses elements/tags to represent:

* Headings
* Paragraphs
* Links
* Images
* Lists
* Tables
* Forms
* Page sections

---

# 5. 🏷️ Semantic HTML

## What is Semantic HTML?

Semantic HTML means using elements that describe the meaning and purpose of their content.

### Common Semantic Elements

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Instead of using:

```html
<div>
    ...
</div>
```

for everything, use meaningful elements where appropriate.

### Benefits

* Better code readability
* Better accessibility
* Better document structure
* Can help search engines understand the page

### Practice

```text
Design UI
   ↓
Identify sections
   ↓
Choose semantic elements
   ↓
Write HTML
```

---

# 6. ↔️ Inline vs Block Elements

| Inline Elements                       | Block Elements                                       |
| ------------------------------------- | ---------------------------------------------------- |
| Usually take only the space they need | Usually start on a new line and take available width |
| `<span>`                              | `<div>`                                              |
| `<a>`                                 | `<p>`                                                |
| `<img>`                               | `<h1>` – `<h6>`                                      |
| `<input>`                             | `<ul>`                                               |
|                                       | `<table>`                                            |
|                                       | `<form>`                                             |

> **Note:** CSS can change how elements participate in layout, so "inline" and "block" describe their default display behavior.

---

# 7. 📋 HTML Lists

| Type             | Tags                     | Purpose                          |
| ---------------- | ------------------------ | -------------------------------- |
| Unordered List   | `<ul>` + `<li>`          | Items where order doesn't matter |
| Ordered List     | `<ol>` + `<li>`          | Items where order matters        |
| Description List | `<dl>` + `<dt>` + `<dd>` | Terms and their descriptions     |

### Description List

```html
<dl>
    <dt>Coffee</dt>
    <dd>Black hot drink</dd>

    <dt>Milk</dt>
    <dd>White cold drink</dd>
</dl>
```

---

# 8. 📊 HTML Tables

### Important Tags

| Tag       | Purpose         |
| --------- | --------------- |
| `<table>` | Table container |
| `<tr>`    | Table row       |
| `<th>`    | Header cell     |
| `<td>`    | Data cell       |

### Concepts Practiced

* Basic tables
* Table borders
* Header rows
* `rowspan`
* `colspan`

### `rowspan`

Merges a cell across multiple rows.

### `colspan`

Merges a cell across multiple columns.

---

# 9. 📝 HTML Forms

Forms collect information from users.

### Input Types Practiced

```html
<input type="text">
<input type="number">
```

### Other Form Elements

```html
<select>
<option>
```

### Example Use Cases

| Element  | Example               |
| -------- | --------------------- |
| `text`   | Card holder name      |
| `number` | Numeric input         |
| `select` | Expiration month/year |

### Payment Card Form

The Day 5 project used:

* Card holder name
* Card number
* Expiration month
* Expiration year
* CVV

Related fields can be grouped together for better layout and usability.

---

# 10. 📤 Form Submission — GET vs POST

|               | GET                                   | POST                                   |
| ------------- | ------------------------------------- | -------------------------------------- |
| Data location | Usually included in the URL           | Usually sent in the request body       |
| Visibility    | Data can appear in URL/history        | Data is not normally shown in the URL  |
| Data size     | Limited by URL/request constraints    | Generally suitable for larger payloads |
| Common use    | Searching, filtering, retrieving data | Creating/submitting data               |

### ⚠️ Important

**POST is not automatically secure.**

Sensitive information should be transmitted over **HTTPS**, regardless of whether GET or POST is used.

---

# 11. 🎨 CSS

## What is CSS?

**CSS = Cascading Style Sheets**

CSS controls the presentation and layout of HTML elements.

It handles things such as:

* Colors
* Fonts
* Spacing
* Borders
* Sizes
* Layout
* Animations
* Responsive design

---

# 12. 📐 Flexbox vs Grid

| Flexbox                   | Grid                                           |
| ------------------------- | ---------------------------------------------- |
| Primarily one-dimensional | Two-dimensional                                |
| Row **or** column         | Rows **and** columns                           |
| `display: flex`           | `display: grid`                                |
| `flex-direction`          | `grid-template-columns` / `grid-template-rows` |
| `gap`                     | `gap`                                          |

### Flexbox

Best when arranging items mainly along **one axis**.

```css
.container {
    display: flex;
    flex-direction: row;
    gap: 20px;
}
```

### Grid

Useful when controlling both rows and columns.

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

---

# 13. 📍 CSS Positioning

## `position: absolute`

Allows an element to be positioned relative to its nearest positioned ancestor.

Commonly used for:

* Overlays
* Floating buttons
* Badges
* Images over cards

Example:

```css
.card {
    position: relative;
}

.image {
    position: absolute;
    top: 0;
    right: 0;
}
```

---

## `transform: translateY()`

Moves an element vertically without changing its normal document flow.

```css
transform: translateY(-10px);
```

---

# 14. 🖱️ Hover Effects & Transitions

Hover effects can make interfaces feel more interactive.

### `opacity`

```css
opacity: 0;
```

Makes an element fully transparent.

### `transform`

```css
transform: translateY(-10px);
```

Moves an element upward.

### `transition`

Makes property changes happen smoothly.

```css
transition: all 0.3s ease;
```

### Example

```css
.play-button {
    opacity: 0;
    transform: translateY(10px);
    transition: 0.3s ease;
}

.card:hover .play-button {
    opacity: 1;
    transform: translateY(0);
}
```

---

# 15. 🎨 Table & Input Styling

### Inputs

Practice styling:

* Padding
* Borders
* Border radius
* Consistent sizing
* Focus states

### Tables

Practice:

* Borders
* Alternating rows
* Hover effects
* Header styling
* Sticky headers

### Useful Selector

```css
tr:nth-child(even) {
    /* styling */
}
```

---

# 16. ⚡ JavaScript

## What is JavaScript?

JavaScript adds **behavior and interactivity** to webpages.

It can:

* Respond to user actions
* Validate forms
* Change content
* Create elements
* Modify styles
* Send and receive data

---

# 17. 🌳 DOM

**DOM = Document Object Model**

The browser represents an HTML document as a structure of objects that JavaScript can access and manipulate.

```text
HTML Document
      ↓
     DOM
      ↓
 JavaScript
      ↓
Read / Change Page
```

---

# 18. 🛠️ DOM Methods Practiced

### `getElementById()`

Find an element by its ID.

```javascript
document.getElementById("name");
```

### `addEventListener()`

Respond to an event.

```javascript
button.addEventListener("click", () => {
    // code
});
```

### `preventDefault()`

Prevents the browser's default action.

For example, it can prevent a form from automatically reloading the page after submission.

```javascript
event.preventDefault();
```

### `createElement()`

Creates a new HTML element.

```javascript
document.createElement("tr");
```

### `innerHTML`

Changes or inserts HTML content.

```javascript
row.innerHTML = "...";
```

### `appendChild()`

Adds an element to another element.

```javascript
tbody.appendChild(row);
```

---

# 19. 🔄 Form + DOM Workflow

The payment card project followed this process:

```text
User enters data
      ↓
Form submitted
      ↓
preventDefault()
      ↓
Read input values
      ↓
Create table row
      ↓
Insert card details
      ↓
Append row to table
      ↓
Clear input fields
```

### Key Idea

JavaScript can capture form data and update the webpage dynamically **without requiring a full page reload**.

---

# 20. 🧠 Runtime Memory — RAM

When a web application is running, it needs memory to temporarily hold the data and information it is currently working with.

**RAM (Random Access Memory)** is the computer's temporary working memory.

When a website is running, the browser and JavaScript engine use memory for things such as:

* Variables
* Objects
* DOM-related data
* Application state
* Temporary calculations
* Data currently being processed

### Example

```javascript
let username = "Santosh";
let age = 22;
```

These values are part of the application's **runtime state** while the JavaScript code is running.

### Mental Model

```text
Application Running
       ↓
   Runtime Memory
       ↓
      RAM
       ↓
Temporary Data
       ↓
Page Reload / Runtime Ends
       ↓
Data is Lost
```

> **Remember:** RAM is volatile memory. It is used for temporary working data while programs are running.

---

# 21. 💾 Browser Storage

Sometimes an application needs data to remain available after a page reload or browser restart.

For this, browsers provide different storage mechanisms.

### Common Browser Storage Options

| Storage              | Persistence              | Typical Use                                       |
| -------------------- | ------------------------ | ------------------------------------------------- |
| JavaScript variables | ❌ Temporary              | Runtime data                                      |
| `sessionStorage`     | ❌ After tab/session ends | Temporary session data                            |
| `localStorage`       | ✅ Persistent             | Simple client-side data                           |
| Cookies              | ✅ Persistent             | Small data, sessions, authentication-related data |
| IndexedDB            | ✅ Persistent             | Larger/structured client-side data                |

### Runtime Memory vs Persistent Storage

```text
                    Browser
                       │
             ┌─────────┴─────────┐
             │                   │
      Runtime Memory       Persistent Storage
             │                   │
            RAM          Browser-managed storage
             │                   │
       JS Variables     localStorage
       DOM / State      sessionStorage
       Runtime Data     Cookies
                        IndexedDB
```

---

# 22. 📦 localStorage

`localStorage` is a browser storage mechanism that allows a website to save data persistently on the user's device.

Unlike normal JavaScript variables, data stored in `localStorage` generally:

* Survives page reloads
* Survives closing and reopening the browser
* Remains available for the same website origin until it is removed or cleared

### Where Does localStorage Fit?

```text
JavaScript Runtime
       ↓
     RAM
       ↓
Temporary Data

        VS

localStorage
       ↓
Browser-managed Persistent Storage
       ↓
Device Storage
       ↓
Data survives reload / browser restart
```

> **Important:** `localStorage` is persistent browser storage backed by storage on the user's device. Think of it as persistent storage rather than RAM.

---

## Adding Data

```javascript
localStorage.setItem("username", "Santosh");
```

## Reading Data

```javascript
const username = localStorage.getItem("username");

console.log(username);
```

## Removing One Item

```javascript
localStorage.removeItem("username");
```

## Removing All localStorage Data

```javascript
localStorage.clear();
```

---

# 23. 🔄 Runtime Memory vs localStorage

### JavaScript Variable

```javascript
let username = "Santosh";
```

The value exists as part of the JavaScript application's runtime state.

```text
Page Running
     ↓
JavaScript Variable
     ↓
Runtime Memory
     ↓
Page Reload / Runtime Ends
     ↓
Value is Lost
```

### localStorage

```javascript
localStorage.setItem("username", "Santosh");
```

The browser stores the value persistently.

```text
Page Running
     ↓
localStorage
     ↓
Persistent Browser Storage
     ↓
Page Reload
     ↓
Data Still Available
```

### Comparison

| Feature                   | JavaScript Variable         | `localStorage`              |
| ------------------------- | --------------------------- | --------------------------- |
| Purpose                   | Runtime data                | Persistent client-side data |
| Lifetime                  | Runtime-dependent           | Persistent                  |
| Survives reload?          | ❌ Usually no                | ✅ Yes                       |
| Survives browser restart? | ❌ No                        | ✅ Generally yes             |
| Storage concept           | Runtime memory              | Persistent browser storage  |
| Data types                | Many JavaScript data types  | Strings                     |
| Access                    | Direct variable             | `localStorage.getItem()`    |
| Best for                  | Temporary application state | Simple persistent data      |

---

# 24. 🗃️ Storing Objects & Arrays in localStorage

`localStorage` stores values as **strings**.

Therefore, objects and arrays must be converted to JSON before storing them.

## Store an Object

```javascript
const user = {
    name: "Santosh",
    age: 22
};

localStorage.setItem("user", JSON.stringify(user));
```

## Retrieve the Object

```javascript
const storedUser = JSON.parse(
    localStorage.getItem("user")
);

console.log(storedUser.name);
```

### Data Flow

When storing:

```text
JavaScript Object
       ↓
JSON.stringify()
       ↓
String
       ↓
localStorage
```

When retrieving:

```text
localStorage
       ↓
String
       ↓
JSON.parse()
       ↓
JavaScript Object
```

---

# 25. 🧑‍💻 Practical Example — Remembering a User's Name

Suppose a user enters their name into a form.

### Save the Name

```javascript
const username =
    document.getElementById("username").value;

localStorage.setItem("username", username);
```

### Retrieve the Name

```javascript
const savedUsername =
    localStorage.getItem("username");

console.log(savedUsername);
```

Even after the page is reloaded, the browser can retrieve the saved value.

---

# 26. ⚠️ localStorage Limitations

`localStorage` is useful for simple persistent client-side data, but it is **not a replacement for a database**.

### Important Points

* Stores values as strings
* Has limited storage capacity
* Data is stored on the user's device
* Same-origin JavaScript can access the stored data
* Users can clear browser storage
* It should not be used to store passwords or other sensitive secrets

For larger or more structured client-side data, **IndexedDB** may be more appropriate.

For application data that needs to be shared between users or devices, use a **backend and database**.

### Browser Storage vs Database

```text
localStorage
     ↓
Browser / Device
     ↓
Specific user's data

        VS

Database
     ↓
Backend / Server
     ↓
Application data
     ↓
Can be shared across users/devices
```

---

# 27. 🏗️ Where Does Data Live?

A simplified web application can be understood like this:

```text
                    Web Application
                           │
             ┌─────────────┴─────────────┐
             │                           │
       Runtime Memory              Persistent Storage
             │                           │
            RAM                 Browser-managed storage
             │                           │
       JS Variables        ┌─────────────┼─────────────┐
       DOM / State         │             │             │
                      localStorage   Cookies      IndexedDB
```

For a full-stack application:

```text
                    Web Application
                           │
             ┌─────────────┴─────────────┐
             │                           │
          Frontend                    Backend
             │                           │
          Browser                      Server
             │                           │
    ┌────────┼────────┐                  │
    │        │        │                  │
localStorage Cookies IndexedDB       Database
                                      │
                              MongoDB / PostgreSQL
```

### Key Mental Model

> **RAM → temporary working memory**
> **localStorage → persistent browser storage**
> **Database → persistent server-side application data**

---

# 28. 🧠 Important Distinction

Avoid thinking:

> ❌ "RAM stores dynamic data and localStorage stores permanent data."

A better understanding is:

> ✅ **While an application is running, its code and runtime state use memory such as RAM. If data needs to survive page reloads or browser restarts, it can be stored using a persistent storage mechanism such as `localStorage`, IndexedDB, cookies, or a backend database.**

### Remember

```text
                  DATA
                    │
          ┌─────────┴─────────┐
          │                   │
      Temporary           Persistent
          │                   │
         RAM          Browser / Server Storage
          │                   │
     JS Variables     localStorage
     DOM / State      IndexedDB
                      Cookies
                      Database
```

This distinction is important for understanding:

* JavaScript variables
* Application state
* DOM manipulation
* Browser storage
* APIs
* Authentication
* Databases
* Frontend vs backend

---

# 29. 🔀 Git & GitHub

## What is Git?

**Git** is a distributed version control system used to track changes in source code.

It allows developers to:

* Track history
* Create branches
* Work on features
* Revert changes
* Merge work

---

## What is GitHub?

**GitHub** is a platform for hosting Git repositories and collaborating with other developers.

### Simple Difference

```text
Git      → Version control tool
GitHub   → Online platform for Git repositories
```

---

# 30. 🔐 SSH Authentication

SSH provides a secure way to authenticate your computer with services such as GitHub.

An SSH key pair contains:

### Public Key

* Added to GitHub
* Safe to share

### Private Key

* Stored on your computer
* Must remain secret
* **Never share it**

### Basic Process

```text
Generate SSH Key Pair
        ↓
Public Key → GitHub
Private Key → Your Computer
        ↓
Authenticate Git Operations
```

---

# 31. 🔄 Git Workflow

A basic Git workflow:

```text
Create / Clone Repository
        ↓
Make Changes
        ↓
git add
        ↓
git commit
        ↓
git push
        ↓
GitHub
```

---

# 32. 💻 Important Git Commands

| Command      | Purpose                                     |
| ------------ | ------------------------------------------- |
| `git clone`  | Copy a remote repository to your computer   |
| `git add`    | Stage changes                               |
| `git commit` | Record staged changes                       |
| `git push`   | Upload local commits to a remote repository |
| `git pull`   | Fetch and integrate remote changes          |
| `git merge`  | Combine changes from different branches     |

---

# 33. 🌿 Git Branching

A **branch** allows you to work on a feature or change without directly modifying the main branch.

Example:

```text
main
 │
 ├── feature/login
 │
 ├── feature/payment
 │
 └── feature/navbar
```

### Why Use Branches?

* Isolate features
* Reduce risk
* Work collaboratively
* Test changes independently

---

# 34. 🔀 Pull Requests

A **Pull Request (PR)** is a request to merge changes from one branch into another, usually through GitHub.

### Typical Workflow

```text
Create Branch
      ↓
Make Changes
      ↓
Commit
      ↓
Push Branch
      ↓
Create Pull Request
      ↓
Review
      ↓
Merge
```

---

# 35. ⚠️ Merge Conflicts

A merge conflict occurs when Git cannot automatically determine how to combine changes.

### General Process

```text
Conflict occurs
      ↓
Identify conflicting code
      ↓
Decide which changes to keep
      ↓
Edit the file
      ↓
Stage the resolved file
      ↓
Complete the merge
```

> **Key idea:** Git asks you to manually decide how conflicting changes should be combined.

---

# 36. 🗂️ #100DaysOfLearning Projects

## Day 1 — Hotel Menu Page

### Files

```text
day1/
├── index.html
└── index.js
```

### Learning Focus

* Basic HTML structure
* Linking pages/files
* Building a simple menu page

---

## Day 2 — Git & GitHub

### Files

```text
day2/
└── README
```

### Learning Focus

* Git setup
* GitHub repository
* SSH authentication
* Push / pull
* Branching
* Merge conflicts

---

## Day 3 — Spotify Wireframe

### Files

```text
day3/
├── README
├── index.html
├── style.css
└── day3-diagram.png
```

### Learning Focus

* Analyze an existing UI
* Break the UI into sections
* Create a wireframe
* Plan HTML structure

---

## Day 4 — Spotify-Style Layout

### Files

```text
day4/
├── README
├── index.html
└── style.css
```

### Learning Focus

* HTML structure
* CSS
* Flexbox
* Layout implementation
* Spotify-inspired page structure

---

## Day 5 — Payment Card Form

### Files

```text
day5/
├── README
├── index.html
├── style.css
├── script.js
└── card.webp
```

### Learning Focus

* HTML forms
* Input types
* Select elements
* CSS form styling
* JavaScript DOM manipulation
* Event handling
* Dynamic table rows

---

# 37. 🧠 Quick Revision

## HTML

> **HTML = Structure**

Learn:

* Semantic HTML
* Lists
* Tables
* Forms
* Inputs

## CSS

> **CSS = Presentation**

Learn:

* Flexbox
* Grid
* Positioning
* Transforms
* Transitions
* Hover effects

## JavaScript

> **JavaScript = Behavior**

Learn:

* DOM
* Events
* Form handling
* Dynamic elements
* DOM manipulation
* Browser storage
* `localStorage`

## Memory & Storage

> **RAM = Temporary working memory**

> **localStorage = Persistent browser storage**

> **Database = Persistent server-side application storage**

## Git

> **Git = Version Control**

Learn:

* Repository
* Commit
* Branch
* Merge
* Pull
* Push
* Pull Request
* Merge conflicts

---

# 38. 🚀 Next Learning Topics

## JavaScript

* Variables
* Data types
* Functions
* Arrays
* Objects
* Loops
* Conditions
* Events
* DOM manipulation in depth
* JavaScript storage
* APIs
* Async JavaScript

## CSS

* Responsive design
* Media queries
* Mobile-first design
* CSS units
* Advanced Flexbox
* Advanced Grid

## Web Development

* HTTP methods
* HTTP status codes
* APIs
* JSON
* Browser DevTools
* Client vs server
* Frontend vs backend

## Git & GitHub

* `.gitignore`
* Remote repositories
* Branch strategies
* Rebasing
* Git stash
* Git reset
* Git revert
* GitHub collaboration

---

# 39. 🎯 Current Learning Goal

Build a complete project that combines:

**HTML + CSS + JavaScript + Browser Storage + Git/GitHub**

```text
Plan
 ↓
Wireframe
 ↓
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
Browser Storage
 ↓
Git
 ↓
GitHub
```

> **Goal:** Don't just memorize concepts.
>
> **Learn → Practice → Build → Document → Review**
