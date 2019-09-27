<template>
  <div id="day-weather" class="day" ref="day" @click="active">
    <div class="day__date" ref="date">{{date}}</div>
    <div class="flex-container">
      <div class="day__temp" v-for="(name, key) in tempData">
        <span class="day__label">{{name}}:</span>
        <span class="day__value">{{dayData.temp[key]}}</span>
        <span class="day__unit">&degC</span>
      </div>
    </div>
    <div class="day__humidity">
      <span class="day__label">Humidity:</span>
      <span class="day__value">{{dayData.humidity}}</span>
      <span class="day__unit">%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "day-weather",
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
      const day = d.getDate();
      const month = d.getMonth();
      this.date = month + " / " + (day + this.index);
    },
    positionDate() {
      const date = this.$refs.date;
      const dateWidth = date.getBoundingClientRect().width;
      date.style.left = dateWidth * this.index - 1 + "px";
    },
    active() {
      this.$emit("active", this.index);
    }
  },
  watch: {
    activeDay() {
      const day = this.$refs.day;
      if (this.activeDay === this.index) {
        day.classList.add("day--active");
      } else {
        day.classList.remove("day--active");
      }
    }
  },
  created() {
    this.setDate();
  },
  mounted() {
    this.positionDate();
  }
};
</script>

<style>
.day {
  border: 1px solid #d7e0e5;
  margin-top: 58px;
  border-radius: 0 4px 4px 4px;
  /* overflow: hidden; */
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
  background: #eeeeee;
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
}

.flex-container {
  display: flex;
  justify-content: stretch;
  padding-bottom: 5px;
}

.day__label {
  display: block;
  color: #0e0e0f;
}

.day__temp,
.day__humidity {
  padding: 4px 20px;
}

.day__temp {
  flex: 1;
  position: relative;
  /* border-top: 1px solid gray; */
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

.day__humidity {
  /* border-top: 1px solid gray; */
}

.day__value,
.day__unit {
  color: #07a0ff;
  font-size: 18px;
}
</style>
