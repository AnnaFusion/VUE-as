<script setup>
import { onMounted } from "vue";

import TicketList from "../components/TicketList.vue";
import { useTicketsStore } from "../stores/tickets";

const store = useTicketsStore();

function handleSortClick(selector) {
  store.setSort(selector);
  store.setTicketsSorted();
}

function handleClickAdd() {
  store.index =
    store.index + 5 > store.tickets.length
      ? store.tickets.length
      : store.index + 5;
}

function setFilters(valueArray) {
  store.filters = valueArray;
}

onMounted(async () => {
  await store.getTickets();
});
</script>

<template>
  <div v-if="!!store.slicedTickets.length" class="inside__view">
    <TicketList
      :tickets="store.slicedTickets"
      :sort="store.sort"
      @handleSortClick="handleSortClick"
      @handleClickAdd="handleClickAdd"
      @setFilters="setFilters"
    />
  </div>
</template>

<style></style>
