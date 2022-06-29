<script setup>
import router from "../router";
import CommonForm from "../components/CommonForm.vue";
import { useUserStore } from "../stores/user";

const store = useUserStore();

async function signup(values) {
  await store.signUp(values);
  router.replace({ name: "tickets" });
}
</script>

<template>
  <div class="full__view">
    <CommonForm
      title="Sign up"
      linkText="Already a member? Log in"
      link="home"
      @functionSubmit="(values) => signup(values)"
    />
  </div>
</template>

<style scoped></style>
