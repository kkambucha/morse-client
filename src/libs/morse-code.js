import EventEmitter from 'events';
import morseAlphabet from './morse-alphabet';

export default class MorseCode extends EventEmitter {
  constructor() {
    super();
    this.dotDuration = 250;
    this.pauseDuration = 250;
    this.spaceDuration = 2500;
    this.keyDownDate = null;
    this.resolveTimer = null;
    this.spaceTimer = null;
    this.message = '';
    this.sequence = '';
  }

  // public methods

  startSignal() {
    if (this.keyDownDate) {
      return false;
    }

    this._stopObserve();

    this.keyDownDate = new Date();
  }

  stopSignal() {
    const keyPressDuration = new Date() - this.keyDownDate;

    this.keyDownDate = null;

    if (keyPressDuration <= this.dotDuration) {
      this._dot();
    } else {
      this._dash();
    }

    this._startObserve();
  }

  getPosibleCharacters() {
    return this._resolvePartial();
  }

  clearMessage() {
    this._stopObserve();
    this.message = '';
    this.emit('message', this.message);
  }

  backspace() {
    if (this.message.length) {
      this.message = this.message.slice(0, -1);
      this.emit('message', this.message);
      this._stopObserve();
    }
  }

  // private methods

  _dot() {
    this._addToSequence('.');
  }

  _dash() {
    this._addToSequence('-');
  }

  _addToSequence(value) {
    if (value !== '.' && value !== '-') {
      console.log('Invalid tone');
    }

    this.sequence += value;
  }

  _resolveSequence() {
    if (!morseAlphabet.hasOwnProperty(this.sequence)) {
      // we don't have a letter with this signal sequence
      return null;
    }

    const character = morseAlphabet[this.sequence];
    this._clearSequence();

    return character;
  }

  _clearSequence() {
    this.sequence = '';
  }

  _resolvePartial() {
    let potentialCharacters = [];
    let sortCharacters;

    for (let pattern in morseAlphabet) {
      if (pattern.indexOf(this.sequence) === 0) {
        potentialCharacters.push(morseAlphabet[pattern]);
      }
    }

    sortCharacters = potentialCharacters.sort();

    return sortCharacters;
  }

  _startObserve() {
    this.resolveTimer = setTimeout(() => {
      // if pause duration > this.spaceDuration - type a message from characters sequence
      const character = this._resolveSequence();

      if (character) {
        this.message += character;
        this.emit('message', this.message);
      } else {
        this._clearSequence();
      }

      this.spaceTimer = setTimeout(() => {
        // if user doesn't make a signal - it will be space symbol between words
        this.message += '_';
        this.emit('message', this.message);
      }, this.spaceDuration);
    }, this.pauseDuration * 3);
  }

  _stopObserve() {
    clearTimeout(this.resolveTimer);
    clearTimeout(this.spaceTimer);
  }
}
