# Markdown Links

This is a npm library that does analyze the URL´s on the markdown files, where it looks for the files that work and continue to work and, also, the ones that are broken.
This project is based on designing a library, where, when performing the search and verification of links in md files, it returns a promise that contains an array of objects.

This is the flowchart that was used for the construction of this library, describing step by step the instructions to reach the final result.
 
 ![Image](img/Md-links%20(4).jpeg)


This project contains the following files:

-index.js: It contains the functions that make up the library work.

-package.json: Contains informaton about author, version, license, dependencies, tests and scripts.

-e.ditorconfig: Text editor settings.

-.eslintrc: Linter settings.

-.gitignore: To ignore node_modules or other files that shouldn´t get include on the versions control (git).

-test/md-links.spec.js: It contains functionality tests.

## General considerations 

The project has realize by Laura Castellanos Montealegre.

The library it´s implemented in JavaScript to be executed with Node.js.

Github was used to organize the project in the 'projects' section, using 'issues' for smooth development.

Unit tests cover a minimum of 70% of statements, functions, lines, and branches.

## Technologies

For this project the following dependencies were used, they are:
-Node.js
-JavaScript
-Npm
-Git
