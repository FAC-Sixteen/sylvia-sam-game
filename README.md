[![Netlify Status](https://api.netlify.com/api/v1/badges/f210f167-80cb-4101-aada-488c03930052/deploy-status)](https://app.netlify.com/sites/neopets/deploys)

# Neopets X Tamagotchi

A nostalgic Neopets game, made by [Sylvia](https://github.com/seabasshoang) and [Sam](https://github.com/starsuit) 

Deployed on netlify: https://neopets.netlify.com/

![neopet](https://media.giphy.com/media/WjoT1sft7d1As/giphy.gif)

## Project Setup

To run locally, clone this repo and run `npm i` to install packages.
* `npm start` to run locally
* `npm test` to run the test suites

## Goals

Use React to build an interactive game that uses data from an API.


### Core Project Goals:
- [x] Query an API for data
- [x] Populate the UI with API data
- [x] Have some form of persistent state and interactivity
- [x] Have integration tests

### Our Goals:
- [x] Neopets game!
- [x] Render a neopet image
- [x] Health bar and happiness bar
- [x] Panel of food items
- [ ] Panel of activities
- [x] Health/happiness bar decreases over time
- [x] Clicking on a food item increases health bar
- [ ] Clicking on an activity increases happiness bar

## Problems

* No API [we made one!](https://github.com/starsuit/neopets)
* Testing (`act()` ??? and updating React?)
* Promise/API/error handling
* CSS wizardry

## Cool stuff we learned

* CSS wizardry (animations, flippin', background-blend-mode)
* Passing setState functions down into helper/utility functions
