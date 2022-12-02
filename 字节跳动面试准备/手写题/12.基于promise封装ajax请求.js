function ajax(method, url, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.state === 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.send(data);
  });
}

// function getDatas(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if ((url = "url1111")) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// }

// const promise = getDatas("url1122");

// promise.then(
//   (res) => {
//     console.log("成功获取");
//   },
//   (err) => {
//     console.log("获取失败");
//   }
// );
// promise 封装实现：

function getData(url) {
  //创建一个promise对象
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    //新建一个http请求
    xhr.open("GET", url, true);
    //设置xhr
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      //当请求成功或失败时，改变promise的状态
      if (this.status == 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    //设置错误监听函数
    xhr.onerror = function () {
      reject(new Error(this.statusText));
    };
    xhr.responseType = "json";

    xhr.setRequestHeader("Accept", "application/json");

    xhr.send(null);
  });
  return promise;
}
