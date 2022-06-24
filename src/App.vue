<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import "@/assets/base.scss";
.inside__view {
  @extend %display-center;
  max-width: 960px;
  margin: 0 auto;
}
.full__view {
  width: 100vw;
  height: 100vh;
  @extend %display-center;
}
</style>
