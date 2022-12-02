const data = [
  {
    id: 1,
    name: "前端",
    children: [
      {
        id: 2,
        name: "html",
        children: [
          { id: 5, name: "vue", children: [] },
          { id: 6, name: "react", children: [] },
        ],
      },
      { id: 3, name: "css", children: [{ id: 7, name: "c++", children: [] }] },
      { id: 4, name: "js", children: [{ id: 8, name: "java", children: [] }] },
    ],
  },
];
//统计每层多少个节点

function bfs(data) {
  let queue = [data[0]];
  let res = [];
  while (queue.length) {
    let len = queue.length;
    res.push(len);
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.children.length !== 0) {
        for (let j = 0; j < node.children.length; j++) {
          queue.push(node.children[j]);
        }
      }
    }
  }
  return res;
}

// **********出现循环引用情况*********
let obj = {
  id: 1,
  name: "前端",
  children: [
    {
      id: 2,
      name: "html",
      children: [
        { id: 5, name: "vue", children: [] },
        { id: 6, name: "react", children: [] },
      ],
    },
    { id: 3, name: "css", children: [{ id: 7, name: "c++", children: [] }] },
    { id: 4, name: "js", children: [{ id: 8, name: "java", children: [] }] },
  ],
};
obj.children[0].children[0].children.push(obj);

const data2 = [obj];

function bfs1(data) {
  let queue = [data[0]];
  let res = [];
  let map = new Map();
  map.set(data[0], 1);
  while (queue.length) {
    let length = queue.length;
    res.push(length);
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      for (let i = 0; i < node.children.length; i++) {
        if (!map.has(node.children[i])) {
          queue.push(node.children[i]);
          map.set(node.children[i], 1);
        }
      }
    }
  }
  return res;
}
console.log(bfs1(data2));

// *********增加一个条件*********
const data3 = [
  {
    id: 1,
    name: "前端",
    children: [
      {
        id: 2,
        name: "html",
        children: [
          { id: 5, name: "vue", children: [] },
          { id: 6, name: "react", children: [] },
        ],
      },
      { id: 3, name: "css", children: [{ id: 7, name: "c++", children: [] }] },
      { id: 4, name: "js", children: [{ id: 8, name: "java", children: [] }] },
    ],
  },
];

function findData(data, id = 1) {
  let queue = [data[0]];
  let map = new Map();
  map.set(data[0], [data[0].name]);
  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();

      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].id === id) {
          return [...map.get(node), node.children[i].name].join("-");
        } else {
          queue.push(node.children[i]);
          map.set(node.children[i], [...map.get(node), node.children[i].name]);
        }
      }
    }
  }
}
console.log(findData(data3, 5));
