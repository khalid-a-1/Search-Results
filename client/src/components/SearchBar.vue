<template>
  <div class="search-container">
    <div class="search-field">
      <span class="material-symbols-outlined search-icon">search</span>
      <input
        type="text"
        placeholder="Search for securities"
        v-model="searchText"
        @input="handleSearch"
      />
      <button
        v-if="showClearButton"
        @click="clearSearch"
        @mouseover="hoveringClearButton = true"
        @mouseleave="hoveringClearButton = false"
      >
        <span class="material-symbols-outlined clear-icon">close</span>
      </button>
    </div>
    <SearchResults :funds="funds" :searchTerm="searchText" />
  </div>
</template>

<script>
import { fetchFunds } from "@/apiService";
import SearchResults from "./SearchResults.vue";

export default {
  name: "SearchBar",
  components: {
    SearchResults,
  },
  data() {
    return {
      searchText: "",
      showClearButton: false,
      hoveringClearButton: false,
      funds: [],
    };
  },
  methods: {
    async handleSearch() {
      this.showClearButton = this.searchText.length > 0;
      if (this.searchText.length >= 2) {
        try {
          this.funds = await fetchFunds(this.searchText);
        } catch (error) {
          console.error("Error fetching funds:", error);
        }
      } else {
        this.funds = [];
      }
    },
    clearSearch() {
      this.searchText = "";
      this.showClearButton = false;
      this.funds = [];
    },
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.search-field {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search-icon,
.clear-icon {
  font-size: 24px;
  color: #5e5e5e;
}

.search-icon {
  position: absolute;
  left: 15px;
}

input {
  padding: 10px 40px 10px 50px;
  font-size: 16px;
  color: #000;
  border-radius: 8px;
  width: 400px;
  background-color: #fff;
  border: none;
}

button {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  align-items: center;
  width: 40px;
  height: 40px;
}
</style>
