<template>
  <div id="day-weather" class="day" ref="day" @click="active">
    <div class="day__date" ref="date">{{date}}</div>
    <div class="flex-container">
      <div class="day__temp" v-for="(name, key) in tempData">
        <weatherData :name="name" :value="dayData.temp[key]" unit="ºC"></weatherData>
      </div>
    </div>
    <div class="day__humidity">
      <weatherData name="Humidity" :value="dayData.humidity" unit="%"></weatherData>
    </div>
  </div>
</template>

<script>
import WeatherData from "./WeatherData";

export default {
  name: "day-weather",
  components: {
    weatherData: WeatherData
  },
  props: {
    dayData: Object,
    index: Number,
    activeDay: Number
  },
  data() {
    return {
      tempData: {
        day: "Day temp",
        night: "Night temp",
        morn: "Morning temp"
      },
      date: null
    };
  },
  methods: {
    setDate() {
      const d = new Date();
      let day = d.getDate();
      let month = d.getMonth();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      this.date = month + " / " + (day + this.index);
    },
    positionDate() {
      const date = this.$refs.date;
      const dateWidth = date.getBoundingClientRect().width;
      date.style.transform =
        " translateY(-100%) translateX(" + 100 * this.index + "%)";
    },
    active() {
      this.$emit("active", this.index);
    },
    checkActive() {
      const day = this.$refs.day;
      if (this.activeDay === this.index) {
        day.classList.add("day--active");
      } else {
        day.classList.remove("day--active");
      }
    }
  },
  watch: {
    activeDay() {
      this.checkActive();
    }
  },
  created() {
    this.setDate();
  },
  mounted() {
    this.positionDate();
    this.checkActive();
  }
};
</script>

<style scoped>
.day {
  border: 1px solid #d7e0e5;
  margin-top: 58px;
  border-radius: 0 4px 4px 4px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  padding: 20px 0;
  background: #fcfdff;
  position: absolute;
  width: 100%;
}

.day__date {
  font-size: 16px;
  padding: 5px 15px;
  color: #a7aeb2;
  font-weight: 600;
  position: absolute;
  background: #f2f3f7;
  top: 0px;
  left: -1px;
  transform: translateY(-100%);
  border: 1px solid #d7e0e5;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  transition: all 0.1s;
}

.day--active {
  z-index: 10;
}

.day--active .day__date {
  background: #fcfdff;
  padding: 10px 15px;
  color: #0e0e0f;
  border-top: 2px solid #fe5f55;
  /* box-shadow: inset 0 4px 8px -4px #07a0ff; */
}

.flex-container {
  display: flex;
  justify-content: stretch;
  padding-bottom: 5px;
}

.day__temp,
.day__humidity {
  padding: 4px 20px;
}

.day__temp {
  flex: 1;
  position: relative;
}

.day__temp:not(:nth-child(1)):after {
  content: "";
  display: block;
  position: absolute;
  height: 30px;
  width: 1px;
  background: #d7e0e5;
  top: 50%;
  transform: translateY(-50%);
  left: -20px;
}
</style>
