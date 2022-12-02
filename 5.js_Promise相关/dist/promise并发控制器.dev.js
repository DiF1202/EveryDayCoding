"use strict";

var fn = function fn(url) {
  // 实际场景这里用axios等请求库 发请求即可 也不用设置延时
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("完成一个任务", url, new Date());
      resolve({
        url: url,
        date: new Date()
      });
    }, 1000);
  });
};

function limitQueue(urls, limit) {
  // 完成任务数
  var i = 0; // 填充满执行队列

  for (var _i = 0; _i < limit; _i++) {
    run();
  } // 执行一个任务


  function run() {
    // 构造待执行任务 当该任务完成后 如果还有待完成的任务 继续执行任务
    new Promise(function (resolve, reject) {
      var url = urls[i];
      i++;
      resolve(fn(url));
    }).then(function () {
      if (i < urls.length) run();
    });
  }
}

var urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

(function _callee(_) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(limitQueue(urls, 4));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
})();