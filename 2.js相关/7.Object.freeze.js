const _objectFreeze = (object) => {
  for (prop in object) {
    const type = Object.prototype.toString.call(object[prop]);
    if (type === "[Object object]" || type === "[Object array]") {
      _objectFreeze(object[prop]);
    } else {
      Object.defineProperty(object, prop, {
        writable: false,
      });
    }
  }
  Object.seal(object);
};

const object_Freeze = (object) => {
  for (key in object) {
    const type = Object.prototype.toString.call(object[key]);
    if (type === "[Object object]" || type === "[Object array]") {
      object_Freeze(object[key]);
    } else {
      Object.defineProperty(object, key, {
        writable: false,
      });
    }
  }
  Object.seal(object);
};
