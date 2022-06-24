<script setup>
import FilterStops from "./FilterStops.vue";
import TicketItem from "./TicketItem.vue";

const data = [
  {
    createdAt: "2022-06-20T13:47:28.106Z",
    updatedAt: "2022-06-20T13:47:28.106Z",
    deletedAt: null,
    ticketEntityId: 397,
    price: 92789,
    carrier: "FCA",
    segments: [
      {
        date: "2022-09-19T22:12:55.807Z",
        stops: ["RWP", "GVA"],
        origin: "BUF",
        duration: 662,
        destination: "BGF",
      },
      {
        date: "2022-11-27T15:39:11.287Z",
        stops: [],
        origin: "BGF",
        duration: 401,
        destination: "BUF",
      },
    ],
  },
  {
    createdAt: "2022-06-20T13:47:28.106Z",
    updatedAt: "2022-06-20T13:47:28.106Z",
    deletedAt: null,
    ticketEntityId: 397,
    price: 12121212,
    carrier: "FCA",
    segments: [
      {
        date: "2022-09-19T22:12:55.807Z",
        stops: ["RWP", "GVA"],
        origin: "BUF",
        duration: 662,
        destination: "BGF",
      },
      {
        date: "2022-11-27T15:39:11.287Z",
        stops: [],
        origin: "BGF",
        duration: 401,
        destination: "BUF",
      },
    ],
  },
  {
    createdAt: "2022-06-20T13:47:28.106Z",
    updatedAt: "2022-06-20T13:47:28.106Z",
    deletedAt: null,
    ticketEntityId: 397,
    price: 13564,
    carrier: "FCA",
    segments: [
      {
        date: "2022-09-19T22:12:55.807Z",
        stops: ["RWP", "GVA"],
        origin: "BUF",
        duration: 662,
        destination: "BGF",
      },
      {
        date: "2022-11-27T15:39:11.287Z",
        stops: [],
        origin: "BGF",
        duration: 401,
        destination: "BUF",
      },
    ],
  },
  {
    createdAt: "2022-06-20T13:47:28.106Z",
    updatedAt: "2022-06-20T13:47:28.106Z",
    deletedAt: null,
    ticketEntityId: 397,
    price: 152398,
    carrier: "FCA",
    segments: [
      {
        date: "2022-09-19T22:12:55.807Z",
        stops: ["RWP", "GVA"],
        origin: "BUF",
        duration: 662,
        destination: "BGF",
      },
      {
        date: "2022-11-27T15:39:11.287Z",
        stops: [],
        origin: "BGF",
        duration: 401,
        destination: "BUF",
      },
    ],
  },
];
</script>

<template>
  <div class="tickets">
    <div class="tickets__header">
      <img class="header__logo" src="/Logo.png" />
    </div>
    <div class="tickets__body">
      <FilterStops />
      <div class="tickets__list">
        <TicketItem
          v-for="ticket in data"
          :key="ticket.createdAt"
          :ticketItem="ticket"
        />
        <button class="tickets__button">Показать еще 5 билетов</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/base.scss";
.tickets__header {
  @extend %display-center;
  height: 160px;
}
.header__logo {
  width: 60px;
  height: 60px;
}
.tickets__body {
  display: flex;
  column-gap: 20px;

  .tickets__list {
    @extend %display-center;
    row-gap: 20px;

    .tickets__button {
      @extend %active-button;
      width: 100%;
      height: 40px;
      margin-bottom: 30px;
    }
  }
}
</style>
