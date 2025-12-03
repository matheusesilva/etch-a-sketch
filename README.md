# Etch-a-Sketch

This repository contains a browser-based Etch-a-Sketch project built with HTML, CSS, and JavaScript.  
The page dynamically generates a grid of square cells that can be “drawn” on by hovering the mouse over them.  
A control button allows the user to reset the grid and choose a new size.

**Live Demo:**  
https://matheusesilva.github.io/etch-a-sketch/

## Features

### Dynamic Grid Creation
- The grid is generated entirely through JavaScript.
- Default size is a 16×16 grid.
- Grid cells are placed inside a main container and arranged using Flexbox.
- The layout maintains a consistent overall drawing space regardless of the number of squares selected.

### Hover Drawing Effect
- Hovering over a grid cell changes its color, creating a drawing trail.
- Coloring is handled through JavaScript by updating cell styles.

### Adjustable Grid Size
- A button prompts the user to enter the desired number of squares per side.
- The previous grid is cleared and replaced by a newly generated one using the same total container size.
- Input is limited to a maximum of 100 to maintain performance.

### Extra Features
- Optional random RGB coloring for each interaction.
- Optional progressive darkening effect, where repeated interactions gradually darken a cell.

## Files

- **index.html**  
  Base structure containing the grid container and control button.

- **style.css**  
  Flexbox layout, sizing rules, and visual styling for the grid and controls.

- **script.js**  
  Logic for:
  - Creating and clearing the grid  
  - Handling hover coloring  
  - Managing grid resizing via user input  

## How to Run
Open `index.html` in any modern browser.

## License
This project is available under the MIT license.
