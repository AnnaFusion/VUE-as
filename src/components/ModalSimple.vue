<script setup>
import { useUserStore } from "../stores/user";
const store = useUserStore();
</script>

<template>
  <Teleport to="body">
    <div v-if="store.isPasswordWrong" class="modal">
      <p>{{ store.errorMessage }}</p>
      <button class="modal__button" @click="store.isPasswordWrong = false">Close</button>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
@import "@/assets/base.scss";
.modal {
  @extend %rounded-shadowed;
  @extend %display-center;
  position: fixed;
  z-index: 999;
  top: 19%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: white;
  padding-bottom: 15px;
  text-transform: uppercase;
  font-weight: 600;
  &__button {
    @extend %active-button;
  }
}
</style>
