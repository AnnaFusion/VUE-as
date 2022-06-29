<script setup>
import router from "../router";
import CommonForm from "../components/CommonForm.vue";
import { useUserStore } from "../stores/user";

const store = useUserStore();

async function login(values) {
  await store.logIn(values);
  router.replace({ name: "tickets" });
}
</script>

<template>
  <div class="full__view">
    <CommonForm
      title="Login"
      linkText="Not a member? Sign up"
      link="signup"
      @functionSubmit="(values) => login(values)"
    />
  </div>
</template>

<style scoped></style>
