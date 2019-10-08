<template>
  <div id="statistics" class="stats info-container">
    <div class="flex-container">
      <span class="stats__label">min</span>
      <span class="stats__label">max</span>
      <span class="stats__label">mean</span>
      <span class="stats__label">mode</span>
    </div>
    <ul class="stats__props-list">
      <li class="stats__item" v-for="prop in transformedDataProps">
        {{dataProps[prop].propName}}:
        <div class="flex-container">
          <span class="stats__value">{{dataProps[prop].propStats.showMin()}} {{prop.unit}}</span>
          <span class="stats__value">{{dataProps[prop].propStats.showMax()}} {{prop.unit}}</span>
          <span
            class="stats__value"
          >{{round(dataProps[prop].propStats.showMean(), 2)}} {{prop.unit}}</span>
          <span
            class="stats__value"
          >{{round(dataProps[prop].propStats.showMode(), 0)}} {{prop.unit}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import DataTracker from "../DataTracker";

export default {
  name: "statistics",
  props: {
    forecastData: Array
  },
  data() {
    return {
      dataProps: {
        morningTemp: {
          propName: "Morning temp",
          unit: "ºC",
          propStats: null
        },
        dayTemp: {
          propName: "Day temp",
          unit: "ºC",
          propStats: null
        },
        nightTemp: {
          propName: "Night temp",
          unit: "ºC",
          propStats: null
        },
        humidity: {
          propName: "Humidity",
          unit: "ºC",
          propStats: null
        }
      }
    };
  },
  methods: {
    setStats() {
      for (let prop of this.transformedDataProps) {
        this.dataProps[prop].dataProps = null;
      }
      this.dataProps.morningTemp.propStats = new DataTracker(this.mornTempData);
      this.dataProps.dayTemp.propStats = new DataTracker(this.dayTempData);
      this.dataProps.nightTemp.propStats = new DataTracker(this.nightTempData);
      this.dataProps.humidity.propStats = new DataTracker(this.humidityData);
    },
    round(val, decimalPlace) {
      let factor = Math.pow(10, decimalPlace);
      return Math.round(val * factor) / factor;
    }
  },
  computed: {
    mornTempData() {
      let arr = [];
      for (let data of this.forecastData) {
        arr.push(data.temp.morn);
      }
      return arr;
    },
    dayTempData() {
      let arr = [];
      for (let data of this.forecastData) {
        arr.push(data.temp.day);
      }
      return arr;
    },
    nightTempData() {
      let arr = [];
      for (let data of this.forecastData) {
        arr.push(data.temp.night);
      }
      return arr;
    },
    humidityData() {
      let arr = [];
      for (let data of this.forecastData) {
        arr.push(data.humidity);
      }
      return arr;
    },
    transformedDataProps() {
      let arr = Object.keys(this.dataProps);
      return arr;
    }
  },
  watch: {
    forecastData() {
      this.setStats();
    }
  },
  created() {
    this.setStats();
    console.log(this.transformedDataProps);
  }
};
</script>


<style scoped>
.stats__label {
  flex: 1;
  text-align: right;
  font-weight: 400;
}

.stats__props-list {
  list-style: none;
}

.stats__item {
  line-height: 30px;
  display: flex;
}

.flex-container {
  margin-left: auto;
  display: inline-block;
  width: 350px;
  display: flex;
  justify-content: space-between;
}
.stats__value {
  flex: 1;
  text-align: right;
  color: #07a0ff;
  font-weight: 600;
}
</style>
