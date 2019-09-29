class DataTracker {
  constructor(values) {
    this.values = values || [];
  }
  insert(val) {
    this.values.push(val);
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
    let maxValue = 0;
    let maxCount = 0;
    for (let i = 0; i < this.values.length; i++) {
      let count = 0;
      for (let j = 0; j < this.values.length; j++) {
        this.values[j] === this.values[i] && count++;
      }
      if (count > maxCount) {
        maxCount = count;
        maxValue = this.values[i];
      }
      return maxValue;
    }
  }
}

export default DataTracker;
