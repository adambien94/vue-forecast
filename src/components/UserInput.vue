<template>
  <div id="user-input">
    <form class="search-form">
      <span class="error-msg" v-if="this.error">{{errorMsg}}</span>
      <input
        type="text"
        class="search-form__input"
        v-model="city"
        placeholder="enter city.."
        @click="setPlaceholder()"
        ref="input"
      />
      <input
        type="submit"
        class="search-form__submit"
        value="Search City"
        @click.prevent="submitCity()"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "user-input",
  props: {
    error: Boolean,
    errorMsg: String
  },
  data() {
    return {
      city: ""
    };
  },
  methods: {
    submitCity() {
      this.$emit("submitCity", this.city.trim());
    },
    setPlaceholder() {
      this.city !== "" && (this.$refs.input.placeholder = this.city);
      this.city = "";
    }
  }
};
</script>

<style scoped>
.search-form {
  position: relative;
}

.error-msg {
  position: absolute;
  top: -35px;
  color: #fe5f55;
}

.search-form__input,
.search-form__submit {
  border-radius: 4px;
  font-family: "Nunito", sans-serif;
  padding: 10px 20px;
  font-size: 18px;
}

.search-form__input {
  text-transform: capitalize;
  border: none;
  outline: none;
  background: #edf0f7;
  width: calc(100% - 145px);
  box-sizing: border-box;
}

.search-form__submit {
  background: #07a0ff;
  border: none;
  outline: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-left: 2px;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.1s;
}

.search-form__submit:hover {
  transform: translateY(-1px);
}
</style>
