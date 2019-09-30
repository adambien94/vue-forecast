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
}

.data__temp,
.data__humidity {
  padding: 4px 20px;
}

.data__temp {
  flex: 1;
  position: relative;
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

.data__value,
.data__unit {
  color: #07a0ff;
  font-weight: 400;
  font-size: 17px;
}
</style>
