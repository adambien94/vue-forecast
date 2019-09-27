<template>
  <div id="day-weather">
    <p>{{dayData.temp.day}}</p>
    <p>{{dayData.temp.night}}</p>
    <p>{{dayData.temp.morn}}</p>
    <p>{{dayData.humidity}}</p>
  </div>
</template>

<script>
export default {
  name: "day-weather",
  props: {
    dayData: Object
  },
  data() {
    return {};
  },
  watch: {
    dayData() {
      console.log(this.dayData);
    }
  }
};
</script>

<style>
#day-weather {
  border: 1px solid gray;
}
</style>
