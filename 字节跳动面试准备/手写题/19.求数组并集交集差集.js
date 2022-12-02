let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

//并集
let union = new Set([...a, ...b]);

//交集
let inset = new Set([...a].filter((x) => b.has(x)));

//差集
let difference = new Set([...a].filter((x) => !b.has(x)));
