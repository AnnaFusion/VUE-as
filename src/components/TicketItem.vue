<script setup>
import {
  formatTime,
  formatDuration,
  formatStops,
} from "../utils/createTicketFlightData";
import TicketFlight from "./TicketFlight.vue";

const props = defineProps({
  ticketItem: Object,
});
</script>

<template>
  <div class="ticket">
    <div class="ticket__header">
      <div class="header__price">
        {{ `${ticketItem?.price?.toLocaleString()} Р` }}
      </div>
      <div class="header__ticket-logo">
        <img class="ticket-logo__img" src="/S7.png" />
      </div>
    </div>
    <div class="ticket__body">
      <div
        class="ticket__flight"
        v-for="segment in ticketItem?.segments"
        :key="segment.duration + Math.random()"
      >
        <TicketFlight
          :head="`${segment.origin} - ${segment.destination}`"
          :info="formatTime(segment)"
        />
        <TicketFlight
          :head="`В ПУТИ`"
          :info="formatDuration(segment.duration)"
        />
        <TicketFlight
          :head="formatStops(segment.stops.length)"
          :info="segment.stops.join()"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/base.scss";
.ticket {
  @extend %rounded-shadowed;
  width: 462px;
  min-height: 144px;
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
