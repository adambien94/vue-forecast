<template>
  <div id="user-input">
    <form class="search-form">
      <input type="text" class="search-form__input" v-model="city" placeholder="search city.." />
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
  props: {},
  data() {
    return {
      city: null
    };
  },
  methods: {
    submitCity() {
      this.$emit("submitCity", this.city);
    }
  }
};
</script>

<style scoped>
.search-form {
  position: relative;
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
}
</style>
