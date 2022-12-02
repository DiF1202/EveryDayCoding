//手写ajax
/////// 简易版
const xhr1 = new XMLHttpRequest();

xhr.open("GET", url, true); //开启异步监听

xhr.onreadystatechange = function () {
  if (this.readyState !== 4) return;

  if (this.state == 200) {
    console.log(this.response);
  } else {
    throw new Error(xhr.statusText);
  }
};

xhr.send();
/////结束

const SERVER_URL = "/server";

let xhr = new XMLHttpRequest();
// 创建 Http 请求
xhr.open("GET", url, true); //开启异步
// 设置状态监听函数
xhr.onreadystatechange = function () {
  if (this.readyState !== 4) return;
  // 当请求成功时
  if (this.status === 200) {
    handle(this.response);
  } else {
    console.error(this.statusText);
  }
};
// 设置请求失败时的监听函数
xhr.onerror = function () {
  console.error(this.statusText);
};
// 设置请求头信息
xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json");
// 发送 Http 请求
xhr.send(null);
