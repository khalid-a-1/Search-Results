<template>
  <div id="app">
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  components: {
    SearchBar,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #1c3a67;
  margin-top: 60px;
}
</style>
