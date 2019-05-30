[![Netlify Status](https://api.netlify.com/api/v1/badges/f210f167-80cb-4101-aada-488c03930052/deploy-status)](https://app.netlify.com/sites/neopets/deploys)

# Neopets X Tamagotchi

A nostalgic Neopets game, made by [Sylvia](https://github.com/seabasshoang) and [Sam](https://github.com/starsuit) 

Deployed on netlify: https://neopets.netlify.com/

## Project Setup

To run locally, clone this repo and run `npm i` to install packages.
* `npm start` to run locally
* `npm test` to run the test suites

## Goals

Use React to build an interactive game that uses data from an API.


### Core Project Goals:
- [ ] Query an API for data
- [ ] Populate the UI with API data
- [ ] Have some form of persistent state and interactivity
- [ ] Have integration tests

### Our Goals:
- [ ] Neopets game!
- [ ] Render a neopet image
- [ ] Health bar and happiness bar
- [ ] Panel of food items
- [ ] Panel of activities
- [ ] Health/happiness bar decreases over time
- [ ] Clicking on a food item increases health bar
- [ ] Clicking on an activity increases happiness bar

## Problems

* No API [we made one!](https://github.com/starsuit/neopets)
* Testing (`act()` ??? and updating React?)
* Promise/API/error handling
* CSS wizardry

## Cool stuff we learned

* CSS wizardry (animations, flippin', background-blend-mode)
* Passing setState functions down into helper/utility functions
