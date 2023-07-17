# Odin-Sketch

This project is part of [The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

In this project, the goal is to utilize JavaScript to create a grid in which you can hover over the individual grid boxes to change the color.

I decided to implement this such that, by default, each time you drag over a grid box, the color is random but you can choose other ways to manually manipulate the color you draw with.

Doing so makes it so that you can't actually draw anything without sinking in a lot of time but it proved to be the most difficult for me to implement since I could think of several ways to allow the user to choose their own colors (manually entering RGB values, color picker, randomly generate a color then only draw with that color) but I couldn't think of a way to reliably randomize it. The solution I ended up coming up with was to use the `Math.floor()` and `Math.random()` methods with some multiplication to generate random numbers between 0-255 and then use three such values to randomly generate an rgb value each time there's a new grid mouse'd over.