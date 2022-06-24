<script setup>
import { format, addMinutes } from "date-fns";
import TicketFlight from "./TicketFlight.vue";
const props = defineProps({
  ticketItem: Object,
});

const segments = props.ticketItem.segments.map((item) => {
  return {
    path: `${item.origin} - ${item.destination}`,
    stops: `${item.stops.length ? item.stops.length : "НЕТ"} ${
      item.stops.length === 1
        ? "ОСТАНОВКА"
        : (item.stops.length === 2) |
          (item.stops.length === 3) |
          (item.stops.length === 4)
        ? "ОСТАНОВКИ"
        : "ОСТАНОВОК"
    }`,
    times: `${format(new Date(item.date), "k:mm")} - ${format(
      addMinutes(new Date(item.date), item.duration),
      "k:mm"
    )}`,
    duration: `${Math.floor(item.duration / 60)}ч ${
      item.duration - Math.floor(item.duration / 60) * 60
    }м`,
    stopsNames: item.stops.join(),
  };
});
</script>

<template>
  <div class="ticket">
    <div class="ticket__header">
      <div class="header__price">
        {{ `${ticketItem.price.toLocaleString()} Р` }}
      </div>
      <div class="header__ticket-logo">
        <img class="ticket-logo__img" src="/S7.png" />
      </div>
    </div>
    <div class="ticket__body">
      <div
        class="ticket__flight"
        v-for="segment in segments"
        :key="segment.duration + Math.random()"
      >
        <TicketFlight :head="segment.path" :info="segment.times" />
        <TicketFlight :head="`В ПУТИ`" :info="segment.duration" />
        <TicketFlight :head="segment.stops" :info="segment.stopsNames" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/base.scss";
.ticket {
  width: 462px;
  min-height: 144px;
  @extend %rounded-shadowed;
  padding: 20px;
  &__header {
    @extend %display-space-between;
    .header__price {
      color: $highlight-color;
      font-size: 24px;
      font-weight: 600;
    }
  }
  &__body {
    min-height: 90px;
    @extend %display-space-between;
    flex-flow: column;
    padding-top: 20px;

    .ticket__flight {
      @extend %display-space-between;
    }
  }
}
</style>
