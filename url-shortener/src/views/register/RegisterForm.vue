<template>
  <Form class="auth__form" @submit="handleSubmit" :validation-schema="schemaRegister">
    <div class="auth__form-group">
      <label for="email" class="auth__form-label">Email</label>
      <Field v-slot="{ field, errorMessage }" name="email" v-model="email">
        <input type="email" class="auth__form-input" :class="errorMessage && 'auth__form-input--invalid'" id="email"
          placeholder="Enter your email address" autocomplete="off" v-bind="field" />
      </Field>
      <ErrorMessage class="auth__form-error" name="email" />
    </div>
    <div class="auth__form-group">
      <label for="password1" class="auth__form-label">Password</label>
      <Field v-slot="{ field, errorMessage }" name="password1" v-model="password1">
        <input type="password" class="auth__form-input" :class="errorMessage && 'auth__form-input--invalid'"
          id="password1" placeholder="*********" autocomplete="off" v-bind="field" />
      </Field>
      <ErrorMessage class="auth__form-error" name="password1" />
    </div>
    <div class="auth__form-group">
      <label for="password2" class="auth__form-label">Repeat Password</label>
      <Field v-slot="{ field, errorMessage }" name="password2" v-model="password2">
        <input type="password" class="auth__form-input" :class="errorMessage && 'auth__form-input--invalid'"
          id="password2" placeholder="*********" autocomplete="off" v-bind="field" />
      </Field>
      <ErrorMessage class="auth__form-error" name="password2" />
    </div>
    <MainButton type="submit" as="button" btn-text="Register" font-size="2rem" :centered="true" :full="true"
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
import { useRouter } from 'vue-router';


const email = ref('');
const password1 = ref('');
const password2 = ref('');
const toastStore = useToastStore();
const { openToast } = toastStore();
const userStore = userSessionStore();
const sessionState = userStore();
const router = useRouter();

const schemaRegister = yup.object({
  email: yup.string().required().email(),
  password1: yup.string().required().min(8),
  password2: yup.string()
    .required('confirm password is a required field')
    .oneOf([yup.ref("password1")], "Passwords do not match"),
});

const handleSubmit = async (values: Record<string, any>) => {
  try {
    sessionState.loading = true;
    const { data: user, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password2,
    });
    if (error) throw error;
    openToast('You have successfully registered', 'success');
    sessionState.loading = false;
    router.push('/login');
  } catch (error) {
    sessionState.loading = false;
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