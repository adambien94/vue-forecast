<template>
  <div id="app">
    <div class="app-container">
      <user-input v-on:submitCity="sendRequest($event)"></user-input>
      <div class="comp-wrapper">
        <days
          v-if="requestSucced"
          :daysNum="daysNum"
          :activeDay="activeDay"
          :dayData="forecastData[activeDay]"
          v-on:active="setActiveDay($event)"
        ></days>
      </div>
      <div class="comp-wrapper">
        <statistics :forecastData="forecastData" v-if="requestSucced"></statistics>
      </div>
    </div>
  </div>
</template>

<script>
import UserInput from "./components/UserInput";
import DayWeather from "./components/DayWeather";
import Statistics from "./components/Statistics";
import Days from "./components/Days";

export default {
  name: "App",
  components: {
    userInput: UserInput,
    dayWeather: DayWeather,
    statistics: Statistics,
    days: Days
  },
  data() {
    return {
      forecastData: [],
      httpForecast: "https://api.openweathermap.org/data/2.5/forecast/daily?q=",
      appid: "&appid=81631cc1843c3ced0966f73c8b9fcdf7",
      units: "metric",
      daysNum: 5,
      activeDay: 0,
      dayTemps: [],
      nightTemps: [],
      morningTemps: [],
      humidities: [],
      requestSucced: false
    };
  },
  methods: {
    sendRequest(city) {
      let urlForecast =
        this.httpForecast +
        city +
        this.appid +
        "&units=" +
        this.units +
        "&cnt=" +
        this.daysNum;

      this.$http.get(urlForecast).then(data => {
        this.forecastData = data.body.list;
        this.updateData();
        this.requestSucced = true;
      });
    },
    setActiveDay(day) {
      this.activeDay = day;
    },
    updateData() {
      this.clearData();
      for (let i = 0; i < this.daysNum; i++) {
        this.dayTemps.push(this.forecastData[i].temp.day);
        this.nightTemps.push(this.forecastData[i].temp.night);
        this.morningTemps.push(this.forecastData[i].temp.morn);
        this.humidities.push(this.forecastData[i].humidity);
      }
    },
    clearData() {
      this.dayTemps = [];
      this.nightTemps = [];
      this.morningTemps = [];
      this.humidities = [];
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background: #fafafa;
  font-family: "Nunito", sans-serif;
}

.app-container {
  width: 500px;
  margin: 90px auto;
}

.info-container {
  border: 1px solid #d7e0e5;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  padding: 20px 20px;
  background: #fcfdff;
}

.comp-wrapper {
  margin-top: 10px;
}
</style>
