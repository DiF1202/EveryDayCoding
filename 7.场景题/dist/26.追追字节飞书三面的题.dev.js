'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

//input ["a","b","c","d","e","f","g"]
//output {"a":{"b":{"c":{"d":{"e":{"f":"g"}}}}}}
//一开始很懵, 后面思路起来想到应该从后往前推就做出来了
function handler(arr) {
  var len = arr.length;

  var prev = _defineProperty({}, arr[len - 2], arr[len - 1]);

  for (var i = len - 3; i >= 0; i--) {
    prev = _defineProperty({}, arr[i], prev);
  }

  return prev;
}

console.log(handler(['a', 'b', 'c', 'd', 'e', 'f', 'g']));
