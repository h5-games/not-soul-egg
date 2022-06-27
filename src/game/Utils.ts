class Utils {
  /**
   * @description 获取给定范围的随机整数
   * @param min
   * @param max
   * @returns
   */
  static random(min, max: number) {
    return Math.floor(Math.random() * (max + 1) + min);
  }

  static randomStep(total: number, step: number) {
    const result = Array(step).fill(0);

    let num = total;
    while (num--) {
      const index = Math.floor(Math.random() * total);
      result[index] += 1;
    }

    return result;
  }
}

export default Utils;
