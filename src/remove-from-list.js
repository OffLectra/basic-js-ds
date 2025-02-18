const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// function removeKFromList(/* l, k */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }


function removeKFromList(l, k) {
  let list = l;
  let key = k;

  if (list === null || list === undefined) {
    return null;
  }
  if (list.value !== key) {
    list.next = removeKFromList(list.next, key)
  } else {
    if (list.next) {
      return removeKFromList(list.next, key)
    } else {
      return null;
    }
  }
  return list;
}

module.exports = {
  removeKFromList
};
