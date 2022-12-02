let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
// parseParam(url);
// /* 结果
// { user: 'anonymous',
//   id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
//   city: '北京', // 中文需解码
//   enabled: true, // 未指定值得 key 约定为 true
// }
// */
//url解析
const parseUrl = url => {
  const tempUrl = url.split('?')[1];
  const resObj = {};
  for (const str of tempUrl.split('&')) {
    let [key, value] = str.split('=');
    value = decodeURIComponent(value); // 解码
    if (resObj.hasOwnProperty(key)) {
      resObj[key] = [].concat(resObj[key], value);
    } else if (value == 'undefined') {
      resObj[key] = true;
    } else {
      resObj[key] = value;
    }
  }
  console.log(resObj);
};

parseUrl(url);

function getUrlParam(sUrl, sKey) {
  // 获取 ? 到 #之间的字符串
  const queryStr = sUrl.indexOf('#') === -1 ? sUrl.slice(sUrl.indexOf('?') + 1) : sUrl.slice(sUrl.indexOf('?') + 1, sUrl.indexOf('#'));
  // 根据 "&" 分隔
  const querys = queryStr.split('&');
  // 用 map 来存
  let queryMap = new Map();
  for (let query of querys) {
    // query 的 Key
    const key = query.split('=')[0];
    // query 的 value
    const value = query.split('=')[1];
    // 如果 map 里面由重复的 key 就采用一个数组来存
    if (queryMap.has(key)) {
      let temp = [].concat(queryMap.get(key));
      temp.push(value);
      queryMap.set(key, temp);
    } else {
      // 没有重复的就直接设置
      queryMap.set(key, value);
    }
  }
  // 给定的参数有 则返回对应的值
  if (queryMap.has(sKey)) {
    return queryMap.get(sKey);
  } else {
    // 否则 返回 {}
    return {};
  }
}
