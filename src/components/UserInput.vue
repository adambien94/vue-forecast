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

<style>
.search-form__input {
  text-transform: capitalize;
  border: none;
  outline: none;
  border-radius: 4px;
  background: #edf0f7;
  font-family: "Nunito", sans-serif;
  padding: 10px 20px;
  font-size: 18px;
}

.search-form__submit {
  background: #07a0ff;
  border: none;
  outline: none;
  color: #fff;
  font-family: "Nunito", sans-serif;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
