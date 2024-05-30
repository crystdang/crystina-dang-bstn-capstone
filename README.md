# Formula Zero

## Overview

A gamified motorsport educational app, specifically for Formula 1. An event-released trivia to educate, encourage and support fans. The design will be framed around the upcoming circuit after the last event and leading up to the next, where general trivia is given to unlock information specific to the upcoming event.

### Problem

Formula Zero addresses the challenge of accessing comprehensive information about motorsports, particularly for new fans or those without a dedicated community for support. With the sheer volume and complexity of data involved, understanding and engaging with live sporting events can often feel like trying to solve a puzzle without all the pieces, making it tough to dive headfirst into the vibrant communities.

In an article from March 11 2024, F1 CEO Stefano Domenicali said 40% of global F1 fans were women, up 8% from 2017. In 2023, Liberty Media launched an F1 Academy with the goal to give female drivers the chance to compete in higher levels of auto racing. These statistics and movement reflect a change in a male-dominated field on and off the track, and a need to support alternative ways of enjoying the sport as well as staying informed.

Source:
https://www.forbes.com/sites/bradadgate/2024/03/11/heres-why-formula-1-racing-is-growing-in-popularity-with-women/?sh=5126e82e137c

pain points:
1. learning about motorsport without a community
2. barrier to access because of the many data points
3. preparing for a live event

trends:
1. female fans in a male-dominated sport
2. post-COVID live event market

### User Profile

1. new fans
considerations:
    - verified facts
    - adjustable difficulty
    - rewarding

2. children
considerations:
    - simple language and coresponding graphics

3. users at a live event:
considerations:
    - discretion
    - searchability
    - information storage

### Features

As a user, I want to be able to easily find information about the sport and be able to reference back to it
As a user, I want to be able to learn about the sport in an interactive way
As a user, I want to be able to have a quick reference while watching a live race
As a user, I want to be rewarded for learning


## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- MySQL
- Express
- Client libraries: 
    - react
    - react-router-dom
    - axios
- Server libraries:
    - knex
    - express

### APIs

List any external sources of data that will be used in your app.

https://documenter.getpostman.com/view/11586746/SztEa7bL
https://api-sports.io/documentation/formula-1/v1 (circuit, driver image)

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- Upcoming Circuit: /


### Mockups

#### Main Page
![](/design/mockups/rough-draft-mockup-f0.jpg)

### Data

A database of trivia questions will be generated with 3 levels of difficulty and either multiple choice or true/false questions.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

**GET /trivia**

- Get questions

Parameters:
- difficulty: button specific difficulty
- category: button specific to category


Response:
```
[
    {
        "id": 1,
        "difficulty": "easy",
        "type": "multiple"
        "category": "rules & regulations",
        "question": "question",
        "correct_answer": "correct answer",
        "incorrect_answers": ["answer 1", "answer 2"]
    },
    ...
]
```

### Auth

nice to have.

## Roadmap

- Gather data: rules, circuit specific: historic

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 200 responses

- Create migrations

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

- List of Upcoming Circuits: /upcoming/circuits
- Circuit Details: /upcoming/circuits/:id
- Login capabilities
- Connect to friends
- Use LLM to create trivia


REFERENCES
https://www.planetf1.com/
https://f1mix.com/
https://en.wikipedia.org/wiki/List_of_Formula_One_circuits
https://f1experiences.com/blog/ranked-top-10-classic-f1-circuits-to-experience
https://www.formula1.com/en/f1-live-timing.html
https://ergast.com/mrd/methods/circuits/
https://openf1.org/#introduction

AI
https://huggingface.co/google/gemma-7b-it-GGUF
