<template>
  <div id="user-input">
    <form class="search-form">
      <input type="text" class="search-form__input" v-model="city" placeholder="search city" />
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
}
</style>
