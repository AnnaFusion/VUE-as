<script setup>
import { ref } from "vue";
const stops = ref([
  {
    selected: true,
    label: "Все",
  },
  {
    selected: false,
    label: "Без пересадок",
  },
  {
    selected: false,
    label: "1 пересадка",
  },
  {
    selected: false,
    label: "2 пересадки",
  },
  {
    selected: false,
    label: "3 пересадки",
  },
]);
</script>

<template>
  <div class="filter-stops">
    <div class="filter-stops__header">Количество пересадок</div>
    <div class="filter-stops__stop" v-for="stop in stops" :key="stop.label">
      <input class="stop__selector" type="checkbox" value="{{stop.selected}}" />
      {{ stop.label }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/base.scss";
.filter-stops {
  @extend %rounded-shadowed;
  width: 232px;
  max-height: 290px;
  &__header {
    @extend %display-center;
    @extend %headers-font;
    width: 100%;
    min-height: 52px;
  }
  &__stop {
    display: flex;
    align-items: center;
    min-height: 20px;
    padding: 10px 5px 10px 20px;
    font-size: 13px;
  }
  .filter-stops__stop:hover {
    background-color: #f1fcff;
  }
  .stop__selector {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}
</style>
