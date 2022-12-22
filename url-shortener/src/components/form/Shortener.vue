<template>
  <div class="shortener">
    <div class="container" style="position: relative">
      <div class="shortener__inner">
        <Form class="shortener__form" @submit="onSubmit" :validation-schema="schemaURL">
          <div class="shortener__form-group">
            <Field v-slot="{ field, errorMessage }" name="url">
              <input class="shortener__form-input" :class="errorMessage && 'shortener__form-input--invalid'" type="url"
                placeholder="Shorten a link here..." v-bind="field" />
            </Field>
            <ErrorMessage class="shortener__form-error" name="url" />
          </div>
          <MainButton :loading="sessionState.loading" btn-text="Shorten It!" type="submit" font-size="2rem"
            :btn-submit="true" as="button" />
        </Form>
      </div>
      <div class="shortener__results" v-if="$route.name === 'home'">
        <URLItem v-for="url in urlList" key="url.code" :url-long="url.original_link" :url-short="url.short_link"
          @copy="copyLink(url.short_link)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainButton from '@/components/buttons/MainButton.vue';
import { Form, Field, ErrorMessage, configure } from 'vee-validate';
import * as yup from 'yup';
import { supabase } from '@/db/supabase';
import URLItem from '@/views/home/URLItem.vue';
import { useShortener } from '@/composables/useShortener';
import { useToastStore } from '@/stores/toast';
import { userSessionStore } from '@/stores/user';
import { useRoute } from 'vue-router';

const userStore = userSessionStore();
const sessionState = userStore();
const toastStore = useToastStore();
const { openToast } = toastStore();
const route = useRoute();

type URL = {
  code: string;
  short_link: string;
  original_link: string;
};

const urlList = ref<URL[] | null>([]);

configure({
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false,
});

const schemaURL = yup.object({
  url: yup.string().required().url()
});

async function onSubmit(values: any, { resetForm }: { resetForm: any; }): Promise<void> {
  sessionState.loading = true;

  const { data, error, loading, errorMessage } = await useShortener(
    `${import.meta.env.VITE_SHORTENER_API}/shorten?url=${values.url}`,
    {}
  );
  if (route.name === 'history') {
    const { data: urls, error: urlError } = await supabase
      .from('urls')
      .insert({
        user_Id: sessionState.session?.user.id,
        long_url: data.value.original_link,
        short_url: data.value.short_link
      });
    await sessionState.getUrls(1);
  }

  if (route.name === 'home') {
    urlList.value?.push(data.value);

  }
  sessionState.loading = false;
  openToast('Link shortened', 'success');
  resetForm();
}

function copyLink(url: string): void {
  navigator.clipboard.writeText(url);
}

</script>

<style scoped lang="scss">
.shortener {
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;


  &__inner {
    background-image: url('@/assets/images/bg-shorten-desktop.svg');
    background-color: var(--color-very-dark-violet);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 3.5rem 5rem;
    border-radius: 1.2rem;
    margin-bottom: 2.5rem;

    @media (max-width: 728px) {
      padding: 1.5rem;
    }
  }

  &__form {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (max-width: 728px) {
      flex-direction: column;
      width: 100%;
      gap: 1.6rem;
    }
  }

  &__form-group {
    flex: 1;
    width: 100%;
  }

  &__form-input {
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;
    border: none;
    font-size: 1.8rem;

    @media (max-width: 728px) {
      padding: 1.2rem;
    }

    &:focus {
      outline: none
    }

    &--invalid {
      border: 4px solid var(--color-red);
    }
  }

  &__form-error {
    font-size: 1.6rem;
    color: var(--color-red);
    display: block;
    margin-top: 1.5rem;
    font-style: italic;
  }
}
</style>