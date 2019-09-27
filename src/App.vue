<template>
  <div id="app">
    <div class="app-container">
      <user-input v-on:submitCity="sendRequest($event)"></user-input>
      <div v-for="day in forecastData">
        <day-weather :dayData="day"></day-weather>
      </div>
    </div>
  </div>
</template>

<script>
import UserInput from "./components/UserInput";
import DayWeather from "./components/DayWeather/DayWeather";

export default {
  name: "App",
  components: {
    userInput: UserInput,
    dayWeather: DayWeather
  },
  data() {
    return {
      forecastData: [],
      httpForecast: "https://api.openweathermap.org/data/2.5/forecast/daily?q=",
      appid: "&appid=81631cc1843c3ced0966f73c8b9fcdf7",
      units: "metric",
      daysNum: 5
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
        console.log(this.forecastData);
      });
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
  background: #eeeeee;
}

.app-container {
  width: 500px;
  margin: 90px auto;
}
</style>
