<template>
  <div id="weather-data">
    <span class="data__label">{{name}}:</span>
    <span class="data__value">{{value}}</span>
    <span class="data__unit">{{unit}}</span>
  </div>
</template>

<script>
export default {
  name: "weather-data",
  props: {
    name: String,
    value: Number,
    unit: String
  },
  data() {
    return {};
  }
};
</script>

<style>
.data__label {
  display: block;
  color: #0e0e0f;
}

.data__temp,
.data__humidity {
  padding: 4px 20px;
}

.data__temp {
  flex: 1;
  position: relative;
  /* border-top: 1px solid gray; */
}

.data__temp:not(:nth-child(1)):after {
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

.data__humidity {
  /* border-top: 1px solid gray; */
}

.data__value,
.data__unit {
  color: #07a0ff;
  font-size: 18px;
}
</style>
