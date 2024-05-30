# Project Title

Formula Zero

## Overview

What is your app? Brief description in a couple of sentences.

A dashboard for the upcoming events, circuit specific. Gamified experience to see additional information. Trivia corresponding to the amount of turns on a track, time based and if completed before the next race, will gain bonus points.

- users: new fans/ kids
- gamify learning motorsport
- use open source F1 API
- create database of current rules - maybe use ai to structure multiple choice


### Problem

Why is your app needed? Background information around any pain points or other reasons.

I have always enjoyed watching live sports and rooting for a team, but as someone who did not another person in my household who enjoyed it, it always felt overwhelming to understand and process the many data points without someone talking in your ear. To be a new fan of any sport, it feels like the resources could be endless, but a gamified experience could entice new fans.

In an article from March 11 2024, F1 CEO Stefano Domenicali said 40% of global F1 fans were women, up 8% from 2017. In 2023, Liberty Media launched an F1 Academy with the goal to give female drivers the chance to compete in higher levels of auto racing.
https://www.forbes.com/sites/bradadgate/2024/03/11/heres-why-formula-1-racing-is-growing-in-popularity-with-women/?sh=5126e82e137c

pain points:
1. learning about a sport in a visual way and can reference back to
2. barrier to access because of the many data points that goes into understanding a live sport without a community
3. preparing for a live event

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

1. new fans
2. children
3. users at a live event - discretion?

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

MUST
- teach about the sport

SHOULD
- support multiple learning styles

COULD
- compare data between tracks


As a user, I want to be able to easily find information about the sport
As a user, I want to be able to learn about the sport in an interactive way
As a user, I want to be able to have a quick reference while watching a live race
As a user, I want to be rewarded for learning
As a user, I want to see a race season counter


## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- TypeScript?
- MySQL
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express

### APIs

List any external sources of data that will be used in your app.

https://ergast.com/mrd/methods/circuits/
https://openf1.org/#introduction
https://documenter.getpostman.com/view/11586746/SztEa7bL
https://api-sports.io/documentation/formula-1/v1 (circuit, driver image)

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- Upcoming Circuit: /
- List of Upcoming Circuits: /upcoming/circuits
- Circuit Details: /upcoming/circuits/:id

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

Race dates - compared to current time


### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

Yes

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.


- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 200 responses

- Create migrations

- Gather data: rules, circuit specific: historic

- Create seeds with sample data

- Deploy client and server projects so all commits will be reflected in production

- Feature: List circuits
    - Implement list of upcoming circuits
    - Create GET /circuits endpoint

- Feature: View circuit
    - Implement circuit details page
    - Create GET /cafes/:id 

- Feature: Home page

- Bug fixes

- DEMO DAY

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

- Connect to friends
- Use LLM to support comparisons
- Driver comparisons
- Constructor comparisons


Features and/or usage instructions
Installation on developer and production environments


REFERENCES
https://www.planetf1.com/
https://f1mix.com/
https://en.wikipedia.org/wiki/List_of_Formula_One_circuits
https://f1experiences.com/blog/ranked-top-10-classic-f1-circuits-to-experience
https://www.formula1.com/en/f1-live-timing.html

AI
https://huggingface.co/google/gemma-7b-it-GGUF