//input ["a","b","c","d","e","f","g"]

//output {"a":{"b":{"c":{"d":{"e":{"f":"g"}}}}}}
//一开始很懵, 后面思路起来想到应该从后往前推就做出来了
function handler(arr) {
  const len = arr.length;
  let prev = {
    [arr[len - 2]]: arr[len - 1],
  };
  for (let i = len - 3; i >= 0; i--) {
    prev = {
      [arr[i]]: prev,
    };
  }
  return prev;
}

console.log(handler(["a", "b", "c", "d", "e", "f", "g"]));
