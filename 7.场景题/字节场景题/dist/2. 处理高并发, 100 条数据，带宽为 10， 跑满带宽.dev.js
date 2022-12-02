"use strict";

// 模拟一百条数据 const message = new Array(100).fill(''); for (let i = 0; i < 100; i++) {  message[i] = '第' + i + '条数据'; } // 模拟请求一千条数据
var message = new Array(100).fill("");

for (var i = 0; i < 100; i++) {
  message[i] = "第" + i + "条数据";
}

function axiosGet(idx) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(message[idx]);
    }, 1000 * Math.random());
  });
} // async ＋ promise 解决方案


function asyncProcess() {
  var max,
      task,
      ans,
      _loop,
      _i,
      _args2 = arguments;

  return regeneratorRuntime.async(function asyncProcess$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          max = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 10;
          task = [];
          ans = [];

          _loop = function _loop(_i) {
            var p;
            return regeneratorRuntime.async(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    p = axiosGet(_i).then(function (res) {
                      console.log(res, task.length);
                      ans.push(res);
                      task.splice(task.indexOf(p), 1);
                    });
                    task.push(p);

                    if (!(task.length === max)) {
                      _context.next = 5;
                      break;
                    }

                    _context.next = 5;
                    return regeneratorRuntime.awrap(Promise.race(task));

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          _i = 0;

        case 5:
          if (!(_i < 100)) {
            _context2.next = 11;
            break;
          }

          _context2.next = 8;
          return regeneratorRuntime.awrap(_loop(_i));

        case 8:
          _i++;
          _context2.next = 5;
          break;

        case 11:
          _context2.next = 13;
          return regeneratorRuntime.awrap(Promise.allSettled(task));

        case 13:
          return _context2.abrupt("return", ans);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  });
}