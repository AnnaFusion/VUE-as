<script setup>
import { useForm, Field } from "vee-validate";
import * as yup from "yup";
import YupPassword from "yup-password";
import ModalSimple from "./ModalSimple.vue";
import router from "../router";
import ButtonLink from "./ButtonLink.vue";

const props = defineProps({
  title: String,
  linkText: String,
  link: String,
});

const emit = defineEmits(["functionSubmit"]);

function redirect() {
  router.replace({ name: props.link });
}

YupPassword(yup);
const { handleSubmit, errors } = useForm({
  validationSchema: yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().password(),
  }),
});
const onSubmit = handleSubmit(async (values) => {
  try {
    emit("functionSubmit", values);
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
<ModalSimple />
  <form class="login" @submit="onSubmit">
    <div class="login__header">
      <img class="login__logo" src="/Logo.png" />
      {{ title }}
    </div>
    <div class="login__body">
      <Field name="email" class="login__input" placeholder="Email" />
      <span class="login__input--error">{{ errors.email }}</span>
      <Field
        name="password"
        class="login__input"
        placeholder="Password"
        type="password"
      />
      <span class="login__input--error">{{ errors.password }}</span>
    </div>
    <button class="login__button" type="submit">{{ title }}</button>
    <div class="login__link">
      <ButtonLink
        :label="linkText"
        :style="{ 'background-color': 'white' }"
        @handleClick="redirect"
      />
    </div>
  </form>
</template>

<style lang="scss" scoped>
@import "@/assets/base.scss";
.login {
  @extend %rounded-shadowed;
  width: 400px;
  margin-top: 20px;

  .login__header {
    @extend %display-center;
    @extend %headers-font;
    font-size: 20px;
    margin: 10px 0 20px 0;
  }
  .login__body {
    min-height: 120px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    .login__input {
      @extend %clean-input;
      min-height: 20px;
      margin: 5px 40px;
      border-bottom: 1px solid $primary-color-lighter;

      &--error {
        @extend %display-center;
        min-height: 16px;
        color: red;
      }
    }
  }
  .login__button {
    @extend %active-button;
    height: 40px;
    width: 80%;
    margin: 0 40px 30px 40px;
  }
  .login__link {
    @extend %display-center;
    margin-bottom: 20px;
    .link__button {
      @extend %clean-input;
      background-color: white;
      cursor: pointer;
    }
    .link__button:hover {
      text-decoration: underline;
      color: $highlight-color;
    }
  }
}
</style>
