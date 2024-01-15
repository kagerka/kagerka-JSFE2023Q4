import { answerField } from "./answer.js";
import { svg } from "./gallows.js";
import { guesses } from "./guesses.js";
import { header } from "./header.js";
import { hint } from "./hint.js";
import { keyboard } from "./keyboard.js";

let wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.append(wrapper);

let pictureField = document.createElement('div');
pictureField.className = 'picture-field';
wrapper.append(pictureField);

let keyboardField = document.createElement('div');
keyboardField.className = 'keyboard-field';
wrapper.append(keyboardField);

// Answer
keyboardField.append(answerField);

// Hint
keyboardField.append(hint);

// Incorrect guesses
keyboardField.append(guesses);

// Keyboard
keyboardField.append(keyboard);

// Picture SVG
pictureField.append(svg);

// Header
pictureField.append(header);
