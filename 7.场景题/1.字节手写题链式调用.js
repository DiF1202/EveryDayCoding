/*
    实现expect方法 以及toBe() or not.toBe()
    expect(3).toBe(3) //true
    expect(4).toBe(3) //false
    expect(3).not.toBe(3)//false
    expect(4).not.toBe(3) //true
*/
function expect(num) {
  return {
    toBe(num1) {
      if (num === num1) return true;
      return false;
    },
    not: {
      toBe(num2) {
        if (num === num2) return false;
        return true;
      },
    },
  };
}
/*
    实现expect方法 以及toBe() or not.toBe()
    expect(3).toBe(3) //true
    expect(4).toBe(3) //false
    expect(3).not.toBe(3)//false
    expect(4).not.toBe(3) //true
*/
