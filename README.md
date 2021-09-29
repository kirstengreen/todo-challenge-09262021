## Overview

Live site: <https://todo-challenge-09262021.vercel.app/>

This todo list app was presented as a coding challege. I was given a Figma mockup and tasked to recreate the design and desired functionality using the tech of my choice (React,Vue, or vanilia JS). I chose React because it is the JS framework that I have been focusing most my professional development on recently. This project would give me another chance to test my growing skillset.

## How to Use

* Clone repo from Code dropdown
* run npm install - to install dependencies 
* npm start - to run development server

## Technology

* React
* JavaScript
* HTML & CSS
* Vercel for deployment

## Known Issues

* Create todo input UI is not complete
* Filter active UI state is not implemented
* Checkbox hoverstate border effect is not impletemented, opted for bg effect to start
* Need a screen for when there are no active or complete tasks when filtered

## Understanding the Challenge

Before I started coding, I wanted to make sure I understood the app structure and what features I needed to build. I did a sketch in Goodnotes before jumping into the code.

![alt text](https://raw.githubusercontent.com/kirstengreen/todo-challenge-09262021/main/public/img/project-sketch.jpeg "Sketch breakdown of todo app")

## What I Learned

* I created a filtered list for the first time, which really tested my understanding of state
* Had an aha moment with useEffect while creating the filters. It eliminated a lot of the UI bugs I encountered because the different states I needed to track were out if sync
* Learned how to do custom styling for checkboxes and how to track the checked state
* Implimented viewport size driven component conditional rendering
* Styling is still one of my favorite things to do

## What I Want to Improve

* Fix bugs!
* I want to learn how to map state, so I better understand how the different states effect eachother before coding in complex interactions
* Use SCSS and SCSS mixins. It would have made conditional rendering easier and more future proof
* Find a better way to implement conditional rendering for components and CSS. I was copy and pasting a lot of the same code and kept thinking there must be a better way
* Complete a general file cleanup and find ways to simplify and make the code more DRY 