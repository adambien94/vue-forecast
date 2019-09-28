<template>
  <div id="statistics" class="info-container">
    <ul class="props-list">
      <li class="props-list__item" v-for="prop in dataProps">
        {{prop.propName}} - min:
        <span class="props-list__val">{{prop.propStats.showMax()}}</span> / max:
        <span class="props-list__val">{{prop.propStats.showMin()}}</span> / mean:
        <span class="props-list__val">{{round(prop.propStats.showMean())}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Statistic from "./Statistic";

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
          propStats: null
        },
        {
          propName: "Day temp",
          propStats: null
        },
        {
          propName: "Night temp",
          propStats: null
        },
        {
          propName: "Humidity",
          propStats: null
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
    round(val) {
      let factor = Math.pow(10, 2);
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
.props-list {
  list-style: none;
}

.props-list__item {
  line-height: 30px;
}

.props-list__val {
  color: #07a0ff;
  font-size: 18px;
}
</style>
