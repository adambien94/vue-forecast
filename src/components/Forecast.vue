<template>
  <div id="forecast" class="forecast">
    <div class="forecast__dates">
      <div
        class="forecast__date"
        v-for="index in daysNum"
        @click="active(index); checkActive()"
        ref="date"
      >{{days[getDayNum(index)]}}</div>
    </div>
    <div class="info-container">
      <div class="forecast__temps">
        <div class="forecast__temp" v-for="(name, key) in tempData">
          <weatherData :name="name" :value="dayData.temp[key]" unit="ºC"></weatherData>
        </div>
      </div>
      <div class="forecast__humidity">
        <weatherData name="Humidity" :value="dayData.humidity" unit="%"></weatherData>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherData from "./WeatherData";

export default {
  name: "forecast",
  components: {
    weatherData: WeatherData
  },
  props: {
    dayData: Object,
    daysNum: Number,
    activeDay: Number
  },
  data() {
    return {
      tempData: {
        morn: "Morning temp",
        day: "Day temp",
        night: "Night temp"
      },
      days: ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."],
      index: 0
    };
  },
  methods: {
    getDayNum(index) {
      let dayNum = new Date().getDay() + index - 1;
      dayNum > 6 && (dayNum -= 7);
      return dayNum;
    },
    active(index) {
      this.index = index - 1;
      this.$emit("active", this.index);
    },
    checkActive() {
      const dates = this.$refs.date;
      for (let date of dates) {
        if (dates.indexOf(date) === this.index) {
          date.classList.add("forecast__date--active");
        } else {
          date.classList.remove("forecast__date--active");
        }
      }
    }
  },
  mounted() {
    this.checkActive();
  }
};
</script>

<style scoped>
.info-container {
  border-radius: 0 4px 4px 4px;
}

.forecast {
  position: relative;
}

.forecast__dates {
  padding-top: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 44px;
}

.forecast__date {
  font-size: 16px;
  padding: 5px 15px;
  color: #a7aeb2;
  background: #edf0f7;
  top: 0px;
  left: -1px;
  transform: translateY(1px);
  z-index: 1;
  border: 1px solid #d7e0e5;
  border-left-color: #edf0f7;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  transition: all 0.1s;
  width: 50px;
}

.forecast__date:nth-child(1) {
  border-left-color: #d7e0e5;
}

.forecast__date--active {
  background: #fcfdff;
  padding: 10px 15px;
  color: #000;
  border-left-color: #d7e0e5;
  border-bottom-color: #fcfdff;
}

.forecast__temps {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.forecast__temp,
.forecast__humidity {
  padding: 4px 0;
}

.forecast__temp {
  flex: 1;
  position: relative;
}

.forecast__temp:not(:nth-child(1)):after {
  content: "";
  display: block;
  position: absolute;
  height: 40px;
  width: 1px;
  background: #d7e0e5;
  top: 50%;
  transform: translateY(-50%);
  left: -10px;
}
</style>
