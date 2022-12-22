<template>
  <Form class="auth__form" @submit="handleSubmit" :validation-schema="schemaLogin">
    <div class="auth__form-group">
      <label for="email" class="auth__form-label">Email</label>
      <Field v-slot="{ field, errorMessage }" name="email" v-model="email">
        <input type="email" class="auth__form-input" :class="errorMessage && 'auth__form-input--invalid'" id="email"
          placeholder="Enter your email address" autocomplete="off" v-bind="field" />
      </Field>
      <ErrorMessage class="auth__form-error" name="email" />
    </div>
    <div class="auth__form-group">
      <label for="password" class="auth__form-label">Password</label>
      <Field v-slot="{ field, errorMessage }" name="password" v-model="password">
        <input type="password" class="auth__form-input" :class="errorMessage && 'auth__form-input--invalid'"
          id="password" placeholder="*********" autocomplete="off" v-bind="field" />
      </Field>
      <ErrorMessage class="auth__form-error" name="password" />
    </div>
    <MainButton type="submit" as="button" btn-text="Log in" font-size="2rem" :centered="true" :full="true"
      :btn-submit="true" />
  </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import MainButton from '@/components/buttons/MainButton.vue';
import { supabase } from '../../db/supabase';
import { useToastStore } from '@/stores/toast';
import { userSessionStore } from '@/stores/user';


const email = ref('');
const password = ref('');
const toastStore = useToastStore();
const { openToast } = toastStore();
const userStore = userSessionStore();
const sessionState = userStore();

const schemaLogin = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});



const handleSubmit = async (values: Record<string, any>) => {

  try {
    sessionState.loading = true;
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    if (error) throw error;
    openToast('You have successfully logged in', 'success');
    sessionState.loading = false;
  } catch (error: unknown) {
    sessionState.loading = true;
    if (error instanceof Error)
      openToast(`${error.message}`, 'error');
  }
};

</script>

<style scoped lang="scss">
.auth__form {
  width: min(100% - 2rem, 50rem);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    width: 100%;
  }

  &-label {
    font-size: 1.6rem;
    font-weight: normal;
    color: var(--color-very-dark-violet);
    display: block;
    margin-bottom: .5rem;
  }

  &-input {
    width: 100%;
    padding: 1.5rem 1rem;
    border-radius: 10px;
    border: 1px solid var(--color-grayish-violet);
    transition: all 0.3s ease;
    font-size: 1.8rem;
    color: var(--color-very-dark-violet);

    @media (max-width: 728px) {
      padding: .85rem 1rem;
    }

    &:focus {
      outline: none;
      border-color: var(--color-very-dark-violet);
      box-shadow: 1px 1px 1px rgba($color: #000000, $alpha: .14);
    }
  }

  &-input--invalid {
    border-color: var(--color-red);
  }

  &-error {
    font-size: 1.6rem;
    color: var(--color-red);
    display: block;
    margin-top: 1rem;
    font-style: italic;
  }
}
</style>