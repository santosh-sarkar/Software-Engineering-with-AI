# Day 04 – CSS Flexbox Layouts

## Overview

On Day 4 of my #100DaysOfLearning journey, I practiced building webpage layouts using **CSS Flexbox** and worked on making a layout more structured and interactive.

## What I Learned

### 1. Flexbox Basics

I practiced creating a page structure using Flexbox. I built a simple layout skeleton with an `aside`, a `main`, and a `footer` using:

* `display: flex` – to arrange elements in a row or column
* `flex-direction` – to control the direction of the layout
* `gap` – to add spacing between flex items

In this basic example, the `aside` takes up a fixed portion of the width while the `main` and `footer` stack vertically inside a wrapper.

### 2. Structuring a Full Webpage

I built a **Spotify-style music page** by structuring it into different sections:

* A **sticky header** with a logo, search bar, and navigation links
* A **sidebar (aside)** with a library section, create playlist cards, and legal links
* A **main content area** with sections for trending songs and popular artists
* A **footer** with link columns and social media icons

This helped me understand how a real-world music page is divided into reusable sections.

### 3. Styling Cards and Sections

I learned how to style content inside the layout, including:

* Song cards with an image, title, and artist name
* Positioning elements using `position: absolute`
* Styling the search bar, buttons, and nav links

### 4. Hover Effects

I created a **song card hover effect** where a circular play button is hidden by default and smoothly appears when the card is hovered. I used:

* `opacity: 0` – to hide the button initially
* `transform: translateY(...)` – to slide the button up
* `transition` – to animate the change smoothly

## Practical Work

During the session, I:

1. Built a basic page skeleton (aside, main, footer) using Flexbox.
2. Structured a complete Spotify-style music page with header, sidebar, main content, and footer.
3. Created song cards for trending songs and popular artists.
4. Added a hover effect that reveals a play button on a song card.

## What I Practiced

- CSS Flexbox (`display: flex`, `flex-direction`, `gap`)
- Structuring a full webpage into sections
- Positioning elements with `position: absolute`
- Styling cards, buttons, and nav bars
- Creating hover effects with `opacity`, `transform`, and `transition`

## Key Takeaway

The main takeaway from Day 4 was learning how **Flexbox makes it easier to arrange and structure a webpage**. Instead of guessing with margins, I could place sections side by side, stack them vertically, and add spacing with just a few lines of CSS. I also learned that small details like hover effects make a page feel more interactive.

**Day 04 completed.**
