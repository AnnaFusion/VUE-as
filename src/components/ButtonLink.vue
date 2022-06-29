<script setup>
const props = defineProps({
  label: String,
});
const emit = defineEmits(["handleClick"]);
</script>

<template>
  <button class="button-link" @click.prevent="emit('handleClick')">
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/base.scss";
.button-link {
  @extend %clean-input;
  cursor: pointer;
}
.button-link:hover {
  text-decoration: underline;
  color: $highlight-color;
}
</style>
