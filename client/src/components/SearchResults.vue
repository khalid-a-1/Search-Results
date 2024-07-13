<template>
  <div v-if="funds.length" class="results-container">
    <div class="results-wrapper">
      <table class="results-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Exchange</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fund in highlightedFunds" :key="fund.id">
            <td v-html="fund.highlightedName"></td>
            <td v-html="fund.highlightedTicker"></td>
            <td>{{ fund.exchange }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResults",
  props: {
    funds: {
      type: Array,
      required: true,
    },
    searchTerm: {
      type: String,
      required: true,
    },
  },
  computed: {
    highlightedFunds() {
      const term = this.searchTerm.toLowerCase();
      const highlight = (text) =>
        text.replace(new RegExp(`(${term})`, "gi"), "<b>$1</b>");

      return this.funds.map((fund) => ({
        ...fund,
        highlightedName: highlight(fund.name),
        highlightedTicker: highlight(fund.ticker),
      }));
    },
  },
};
</script>

<style scoped>
.results-container {
  margin-top: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
}

.results-wrapper {
  max-height: 300px;
  overflow-y: auto;
}

.results-table {
  width: 100%;
  border-collapse: collapse;
}

.results-table th,
.results-table td {
  padding: 10px 20px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.results-table th {
  background: #f4f4f4;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 1;
}

.results-table tr:last-child td:first-child,
.results-table tr:last-child td:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.results-table tr:hover {
  background: #e9efff;
}

.results-table td b {
  color: #000;
}
</style>
