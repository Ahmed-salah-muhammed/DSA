//------------------ i tried binary Search again and it was worked btw --------------

function binarySearch(arr, i, start = 0, end = arr.length - 1) {
  const mid = Math.floor((end + start) / 2);
  let guess = arr[mid];
  if (i === guess) return mid;
  else if (i > guess) return binarySearch(arr, i, mid + 1, end);
  else if (i < guess) return binarySearch(arr, i, start, mid - 1);
  else return null;
}
const array = [70, 80, 90, 100, 150, 190, 200, 250];
console.log(binarySearch(array, 90));

/*function binarySearch(arr, i) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    let guess = arr[mid];

    if (guess === i)
      return mid; //early return
    else if (i > guess) start = mid + 1;
    else if (i < guess) end = mid - 1;
  }
  return null;
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(array, 7));*/

// linkedList.js

// ---------- Node ----------
function createNode(value) {
  return {
    value: value,
    next: null,
  };
}

// ---------- Linked List ----------
function createLinkedList() {
  return {
    head: null,
    length: 0,
  };
}

// ---------- Add to end ----------
function append(list, value) {
  const node = createNode(value);

  if (list.head === null) {
    list.head = node;
    list.length++;
    return;
  }

  let current = list.head;
  while (current.next !== null) {
    current = current.next;
  }

  current.next = node;
  list.length++;
}

// ---------- Add to start ----------
function prepend(list, value) {
  let node = createNode(value);
  node.next = list.head;
  list.head = node;
  list.length++;
}

// ---------- Remove first occurrence ----------
function remove(list, value) {
  if (list.head.value === value) {
    list.head = list.head.next; //first node
    list.length--;
    return;
  }
  let current = list.head;

  while (current.next !== null) {
    if (current.next.value === value) {
      current.next = current.next.next;
      list.length--;
      return;
    }
    current = current.next;
  }
}

// ---------- Reverse list ----------
function reverse(list) {
  let prev = null;
  let current = list.head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  list.head = prev;
}
//------ create linked List -----------
let list = createLinkedList();

prepend(list, 0);

append(list, 6);
append(list, 3);
append(list, 8);

remove(list, 3);
reverse(list);

console.log(list);

// -----------selection sort------------------

function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  let sortedArr = [];
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let smallestIndex = findSmallest(arr);

    let smallestElement = arr.splice(smallestIndex, 1)[0];
    sortedArr.push(smallestElement);
  }
  return sortedArr;
}

let arr1 = [8, 6, 5, 3, 12];
console.log(`sorted arr : [${selectionSort(arr1).join(", ")}]`);
