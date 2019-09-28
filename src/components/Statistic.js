class Statistic {
  constructor(values) {
    this.values = values;
  }
  showMin() {
    return Math.min.apply(Math, this.values);
  }
  showMax() {
    return Math.max.apply(Math, this.values);
  }
  showMean() {
    let sum = 0;
    for (let val of this.values) {
      sum += val;
    }
    return sum / this.values.length;
  }
  showMode() {
    return "😜";
  }
}

export default Statistic;
