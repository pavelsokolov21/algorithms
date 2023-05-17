// https://webdevblog.ru/dvoichnoe-derevo-poiska-na-javascript/
// https://proglib.io/p/rasprostranennye-algoritmy-i-struktury-dannyh-v-javascript-derevya-2021-10-18

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  setLeft(node) {
    this.left = node;
  }

  setRight(node) {
    this.right = node;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;

      return;
    }

    this.#insertNode(this.root, node);
  }

  #insertNode(node, newNode) {
    if (node.value > newNode.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.#insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.setRight(newNode);
      } else {
        this.#insertNode(node.right, newNode);
      }
    }
  }

  // Прямой обход дерева
  inOrderTraverse(node, callback) {
    if (node !== null) {
      this.inOrderTraverse(node.left, callback);
      callback(node.value);
      this.inOrderTraverse(node.right, callback);
    }
  }

  // Симметричный обход
  preOrderTraverse(node, callback) {
    if (node !== null) {
      callback(node.value);

      this.preOrderTraverse(node.left, callback);
      this.preOrderTraverse(node.right, callback);
    }
  }

  // Обход в обратном порядке
  postOrderTraverse(node, callback) {
    if (node !== null) {
      this.postOrderTraverse(node.left, callback);
      this.postOrderTraverse(node.right, callback);

      callback(node.value);
    }
  }

  // Поиск значения из ноды
  search(node, value) {
    if (node === null) {
      return null;
    }

    if (value > node.value) {
      return this.search(node.right, value);
    }

    if (value < node.value) {
      return this.search(node.left, value);
    }

    return node;
  }

  // находит минимальный узел в дереве
  findMinNode(node) {
    // если слева от узла ноль тогда это должен быть минимальный узел
    if (node.left === null) {
      return node;
    }

    return this.findMinNode(node.left);
  }

  remove(value) {
    this.root = this.#removeNode(this.root, value); // helper method below
  }

  #removeNode(node, value) {
    if (node === null) {
      return null;
    }

    // Если значения совпадают
    if (value === node.value) {
      // Если нет левого или  правого потомков
      if (node.left === null && node.right === null) {
        return null;
      }

      // Если только один потомок
      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      // Удаляем узел с 2-я потомками
      const newNode = this.findMinNode(node.right);
      node.value = newNode.value;
      node.right = this.#removeNode(node.right, newNode.value);

      return node;
    }

    // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    if (node.value > value) {
      node.left = this.#removeNode(node.left, value);

      return node;
    }

    // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    if (value > node.value) {
      node.right = this.#removeNode(node.right, value);

      return node;
    }
  }
}

const BST = new BinarySearchTree();

BST.insert(11); // root
BST.insert(7);
BST.insert(9);
BST.insert(15);
BST.insert(6);
BST.insert(5);
BST.insert(8);
BST.insert(10);

console.log(BST.remove(this.root, 5));

// BST.preOrderTraverse(BST.root, (value) => console.log(value));
