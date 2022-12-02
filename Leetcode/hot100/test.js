'my name is amz'.slice(11) // "amz" 传递2个参数，第一个参数是从什么位置开始裁剪，第二个参数是 截取到什么地方，如果没传递第二个参数，就默认裁剪到最后一位
'my name is amz'.slice(0, 2) // 'my' 从第1位裁剪到第三位
'my name is amz'.slice(0, -1) // "my name is am"  两个参数都可以是负数， 负数参数相加原字符串的长度  也就是上面的意思是说 从第1位裁剪到'my name is amz'.length + -1的位置

const str = 'my name is hdf';
// 如果只传入一个参数那么 就是从 这一位开始 一直到结束
// 两个的话 比如(0,2) 就是[0,1] 可以这么理解
// 也可以传入负数(比如0,-1)
console.log(str.slice(11))      //hdf
console.log(str.slice(0, 5))    //my na
console.log(str.slice(0, -1))   //my name is hd