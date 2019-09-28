<template>
  <div id="days" class="days">
    <div class="days__dates">
      <div
        class="days__date"
        v-for="index in daysNum"
        @click="active(index); checkActive()"
        ref="date"
      >{{month}} / {{day + index - 1}}</div>
    </div>
    <div class="info-container">
      <div class="days__temp-info">
        <div class="days__temp" v-for="(name, key) in tempData">
          <weatherData :name="name" :value="dayData.temp[key]" unit="ºC"></weatherData>
        </div>
      </div>
      <div class="days__humidity-info">
        <weatherData name="Humidity" :value="dayData.humidity" unit="%"></weatherData>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherData from "./WeatherData";

export default {
  name: "days",
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
        day: "Day temp",
        night: "Night temp",
        morn: "Morning temp"
      },
      day: null,
      month: null,
      index: 0
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
      this.month = month;
      this.day = day;
    },
    active(index) {
      this.index = index - 1;
      this.$emit("active", this.index);
    },
    checkActive() {
      const dates = this.$refs.date;
      for (let date of dates) {
        if (dates.indexOf(date) === this.index) {
          date.classList.add("days__date--active");
        } else {
          date.classList.remove("days__date--active");
        }
      }
    }
  },
  created() {
    this.setDate();
  },
  mounted() {
    this.checkActive();
  }
};
</script>



<style scoped>
.days {
  position: relative;
}

.days__dates {
  padding-top: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 44px;
}

.days__date {
  font-size: 16px;
  padding: 5px 15px;
  color: #a7aeb2;
  font-weight: 600;
  background: #f2f3f7;
  top: 0px;
  left: -1px;
  transform: translateY(1px);
  z-index: 1;
  border: 1px solid #d7e0e5;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  transition: all 0.1s;
}

.days__date--active {
  background: #fcfdff;
  padding: 10px 15px;
  color: #0e0e0f;
  border-top: 2px solid #fe5f55;
  border-bottom: none;
}

.info-container {
  border-radius: 0 4px 4px 4px;
}

.days__temp-info {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.days__temp,
.days__humidity-info {
  padding: 4px 0;
}

.days__temp {
  flex: 1;
  position: relative;
}

.days__temp:not(:nth-child(1)) {
  padding-left: 20px;
}

.days__temp:not(:nth-child(1)):after {
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
