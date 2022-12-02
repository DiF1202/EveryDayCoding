//Api大法
String.prototype._reverse = function (a) {
  return a.split("").reverse().join("");
};
var obj = new String();
var res = obj._reverse("hello");
console.log(res); // olleh

//双指针法
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}

