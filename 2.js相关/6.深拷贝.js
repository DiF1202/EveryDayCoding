function deepCopy(obj) {
  if (!obj || typeof obj !== "object") return obj; //可能传入的是null;

  let newObject = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        newObject[key] = deepCopy(obj[key]);
      } else {
        newObject[key] = obj[key];
      }
    }
  }

  return newObject;
}

function deepCopy(obj) {
  if (obj instanceof Date) return new Date(target);
  if (obj instanceof RegExp) return new RegExp(target);
  if (obj instanceof Error) return new Error(target.message);
  if (obj instanceof Function)
    return function proxy(...args) {
      return obj.call(this, args);
    };
  if (!obj || typeof obj !== "object") return obj; //可能传入的是null;

  let newObject = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        newObject[key] = deepCopy(obj[key]);
      } else {
        newObject[key] = obj[key];
      }
    }
  }

  return newObject;
}

//老吕版
function deepClone(obj) {
  let result;
  if (typeof obj == "object") {
    if (obj == null) {
      result = obj;
    } else if (obj.constructor == RegExp) {
      result = new RegExp(obj);
    } else if (Array.isArray(obj)) {
      result = [];
      for (let key of obj) {
        result.push(deepClone(key));
      }
    } else {
      result = {};
      for (let key in obj) {
        if (!result.hasOwnProperty(key)) {
          result[key] = deepClone(obj[key]);
        }
      }
    }
  } else {
    result = obj;
  }
  return result;
}
