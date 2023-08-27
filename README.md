# Clock App with React Components

This test demonstrates the synchronization of two clocks: one analogue clock with rotating hands and another digital clock. These clocks can work together or separately, and they update in real-time to display the current time.

## Table of Contents

- [Features](#features)
- [Installation](#installation-testing-the-app-locally)
- [Components](#components)
- [Usage](#usage-examples)

## Features

- An analogue clock that visually displays the current time with rotating hands.
- A digital clock that displays the current time in a digital format.
- Both clocks are synchronized and update every second.

## Getting Started

To get started with the clocks test, follow these steps:

### Installation: Testing the App Locally

1. Clone the repository to your local machine.
2. Once you've cloned the app, you may test it locally by running npm commands inside the root folder.
```bash
$ npm install
$ npm run build
```

### Usage

1. The vite preview command will boot up a local static web server that serves the files from dist at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.
2. You can check out a deployed version of the App on GitHub Pages by visiting the following URL: https://jantonca.github.io/clock-react/

## Components

### AnalogueClock

This component displays an analogue clock with rotating hour, minute, and second hands.

### DigitalClock

This component displays a digital clock that shows the current time in a digital format.


## Usage Examples

### Displaying Both Clocks

```html
<div className="App">
    <AnalogueClock />
    <DigitalClock />
</div>
```

### Displaying Analogue Clock Only

```html
<div className="App">
    <AnalogueClock />
</div>
```

### Displaying Digital Clock Only

```html
<div className="App">
    <DigitalClock />
</div>
```