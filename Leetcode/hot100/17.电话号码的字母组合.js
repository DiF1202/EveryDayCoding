//这题是回溯算法
var letterCombinations = function (digits) {
    const len = digits.length;
    //这题map要构建 0 和 1 是没有的。 2开始有字母。
    const map = [
        "",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz",
    ];

    if (!len) return [];
    if (len === 1) return map[digits].split("");

    const res = [];
    let path = [];
    //确定参数。递归数组 + 数组长度 + 索引。
    backtracking(digits, len, 0);
    return res;

    function backtracking(arr, len, index) {
        //退出的条件
        if (path.length === len) {
            res.push(path.join(""));
            return;
        }
        for (const item of map[arr[index]]) {
            path.push(item);
            backtracking(arr, len, index + 1);
            //回溯
            path.pop();
        }
    }
};

