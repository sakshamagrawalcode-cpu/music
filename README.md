# 🥁 Drum Kit

Browser-based drum kit. Each of the 7 pads plays a distinct sound on click or corresponding key press, with a visual "pressed" animation.

## Features

- 7 sounds mapped to keys: `w` `a` `s` `d` (toms), `j` (snare), `k` (crash), `l` (kick)
- Mouse click and keyboard input both supported
- Button press animation (200ms) on trigger

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla, no libraries/frameworks)

## Project Structure

```
├── index.html
├── styles.css
├── index.js
├── sounds/    (tom-1.mp3, tom-2.mp3, tom-3.mp3, tom-4.mp3, snare.mp3, crash.mp3, kick.mp3)
└── images/    (tom1.png, tom2.png, tom3.png, tom4.png, snare.png, crash.png, kick.png)
```

## Setup

1. Clone the repo
2. Ensure `sounds/` and `images/` contain the listed assets
3. Open `index.html` in a browser

## Credits

- HTML/CSS: course-provided starter code
- JavaScript (`index.js`): written independently
