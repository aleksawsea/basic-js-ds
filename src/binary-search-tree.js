const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = AddData(this.rootNode, data);

    function AddData(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = AddData(node.left, data);
      } else if (data > node.data) {
        node.right = AddData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasData(this.rootNode, data);

    function hasData(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasData(node.left, data);
      } else if (data > node.data) {
        return hasData(node.right, data);
      }
    }
  }

  find(data) {
    return SearchData(this.rootNode, data);

    function SearchData(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return SearchData(node.left, data);
      } else if (data > node.data) {
        return SearchData(node.right, data);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentNode =  this.rootNode;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode =  this.rootNode;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};