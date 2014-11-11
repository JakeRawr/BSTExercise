'use strict';

var BST = require('./binary').BST;
var BSTWords = require('./wordBinary');

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(22);
console.log("Inorder traversal: ");
inOrder(nums.root);
console.log("Total node count = " + countNodes(nums.root, 0));
console.log("Total edge count = " + countEdges(nums.root, 0));
console.log("The Maximum node is  = " + max(nums.root).data);
console.log("The Minimum node is  = " + min(nums.root).data);
console.log();

function inOrder (node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

function countNodes (node, num){
  if(node!==null) {
    num++;
    num = countNodes(node.left, num);
    num = countNodes(node.right, num);
  }
  return num;
}

function countEdges (node){
  return countNodes(node, 0) - 1;
}

function max (node){
  if (node.right !== null){
    return max(node.right);
  } else {
    return node;
  }
}

function min (node){
  if (node.left !== null){
    return min(node.left);
  } else {
    return node;
  }
}

//File store in BST
/******************************************/

var word = new BSTWords();
word.insert('a');
word.insert('ab');
word.insert('c');
word.insert('d');
word.insert('e');
word.insert('f');
word.insert('aa');
word.insert('d');
word.insert('i');
word.insert('d');
word.insert('k');
word.insert('qa');
word.insert('ab');

function wordsInOrder (node) {
  if (node !== null) {
    wordsInOrder(node.left);
    console.log(node.string + " " + node.count);
    wordsInOrder(node.right);
  }
}
console.log("Inorder traversal: ");
wordsInOrder(word.root);

