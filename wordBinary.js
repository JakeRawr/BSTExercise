'use strict';

function Word (string, left, right) {
  this.left = left;
  this.right = right;
  this.string = string;
  this.count = 1;
}

function BSTWords() {
  this.root = null;

  this.constructor.prototype.insert = function (string) {
    var newWord = new Word(string, null, null);
    if (this.root === null) {
      this.root = newWord;
    } else {
      var current = this.root;
      var parent;
      while (true) {
        parent = current;
        if (string < current.string) {
          current = current.left;
          if (current === null) {
            parent.left = newWord;
            break;
          }
        } else if (string > current.string) {
          current = current.right;
          if (current === null) {
            parent.right = newWord;
            break;
          }
        } else {
          current.count++;
          break;
        }
      }
    }
  };
}

module.exports = BSTWords;
