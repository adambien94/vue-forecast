<template>
  <div id="loader" class="loader">
    <span class="loader__dot"></span>
    <span class="loader__dot"></span>
    <span class="loader__dot"></span>
  </div>
</template>

<script>
export default {
  name: "loader",
  props: {
    error: Boolean,
    errorMsg: String
  },
  data() {
    return {
      city: ""
    };
  }
};
</script>

<style scoped>
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.35);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}

.loader {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
}

.loader__dot {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  box-sizing: border-box;
  background: #fe5f55;
}

.loader__dot:nth-child(1) {
  animation: pulse 0.75s infinite;
}

.loader__dot:nth-child(2) {
  animation: pulse 0.75s infinite 0.07s;
}

.loader__dot:nth-child(3) {
  animation: pulse 0.75s infinite 0.14s;
}
</style>
