var lengthOfLongestSubstring = function (s) {
    const map = new Map();
    let left = 0, right = 0;
    let res = 0; // 记录结果
    while (right < s.length) {
        const c = s[right];
        right++;
        // 进行窗口内数据的更新
        map.set(c, (map.get(c) || 0) + 1);
        // 当出现重复时，左侧窗口需要收缩
        while (map.get(c) > 1) {
            const d = s[left];
            left++;
            // 进行窗口内数据的更新
            map.set(d, map.get(d) - 1);
        }
        // 更新答案
        res = Math.max(res, right - left);
    }
    return res
};