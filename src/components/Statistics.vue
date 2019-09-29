<template>
  <div id="statistics" class="stats info-container">
    <div class="flex-container">
      <span class="stats__label">min</span>
      <span class="stats__label">max</span>
      <span class="stats__label">mean</span>
      <span class="stats__label">mode</span>
    </div>
    <ul class="stats__props-list">
      <li class="stats__item" v-for="prop in dataProps">
        {{prop.propName}}:
        <div class="flex-container">
          <span class="stats__value">{{prop.propStats.showMin()}} {{prop.unit}}</span>
          <span class="stats__value">{{prop.propStats.showMax()}} {{prop.unit}}</span>
          <span class="stats__value">{{round(prop.propStats.showMean(), 2)}} {{prop.unit}}</span>
          <span class="stats__value">{{round(prop.propStats.showMode(), 0)}} {{prop.unit}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Statistic from "../mixins/Statistic";

export default {
  name: "statistics",
  props: {
    forecastData: Array
  },
  data() {
    return {
      dataProps: [
        {
          propName: "Morning temp",
          unit: "ºC",

          propStats: null
        },
        {
          propName: "Day temp",
          unit: "ºC",
          propStats: null
        },
        {
          propName: "Night temp",
          unit: "ºC",
          propStats: null
        },
        {
          propName: "Humidity",
          propStats: null,
          unit: "%"
        }
      ]
    };
  },
  methods: {
    setStats() {
      for (let item of this.dataProps) {
        item.dataProps = null;
      }
      this.dataProps[0].propStats = new Statistic(this.mornTempData);
      this.dataProps[1].propStats = new Statistic(this.dayTempData);
      this.dataProps[2].propStats = new Statistic(this.nightTempData);
      this.dataProps[3].propStats = new Statistic(this.humidityData);
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
    }
  },
  watch: {
    forecastData() {
      this.setStats();
    }
  },
  created() {
    this.setStats();
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
}
</style>
