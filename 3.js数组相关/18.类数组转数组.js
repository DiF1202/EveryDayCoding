// 类数组转换为数组的方法有这样几种：

// 通过 call 调用数组的 slice 方法来实现转换

Array.prototype.slice.call(arrayLike);

// 通过 call 调用数组的 splice 方法来实现转换

Array.prototype.splice.call(arrayLike, 0);

// 通过 apply 调用数组的 concat 方法来实现转换

Array.prototype.concat.apply([], arrayLike);

// 通过 Array.from 方法来实现转换

Array.from(arrayLike);
