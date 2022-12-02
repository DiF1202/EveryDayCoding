//贪心算法板子题
// 本题可以看作是一个求面积的题(area = width * height)
// width最大为arr.length - 1，我们从这入手,如何不断缩小width,提高height,不断更新area
function maxArea(height) {
    let i = 0;
    let j = height.length - 1;
    let area = 0;
    while (i < j) {
        const newArea = Math.min(height[i], height[j]) * (j - i);
        if (newArea > area) area = newArea;
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return area;
}
