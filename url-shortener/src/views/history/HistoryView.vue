<template>
  <div class="history" v-if="!sessionState.loading">
    <div class="container">
      <div class="history__inner">
        <Shortener />
        <h1 class="title">My links</h1>
        <table class="history__table">
          <thead>
            <tr>
              <th>Long URL</th>
              <th>Short URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(url, i) in urls" key="url.id">
              <td>{{ url.long_url }}</td>
              <td>{{ url.short_url }}</td>
              <td>
                <div class="history__table-actions">
                  <IconButton icon="clipboard" @click="copyLink(url.short_url)" />
                  <IconButton icon="times" @click="handleDelete(url.id)" />
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">
                <div class="history__table-pagination">
                  <PaginationButton btn-text="Previous" direction="left" @click="prevPage" />
                  <span>Current page: {{ currentPage }}</span>
                  <PaginationButton btn-text="Next" direction="right" @click="nextPage" />
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
  <LoadingSpinner v-else />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import MainButton from '@/components/buttons/MainButton.vue';
import Shortener from '../../components/form/Shortener.vue';
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue';
import PaginationButton from '@/components/buttons/PaginationButton.vue';
import IconButton from '@/components/buttons/IconButton.vue';
import { supabase } from '@/db/supabase';
import { userSessionStore } from '@/stores/user';
import { useToastStore } from '@/stores/toast';

const toastStore = useToastStore();
const { openToast } = toastStore();
const userStore = userSessionStore();
const sessionState = userStore();
const pageSize = ref(5);
const currentPage = ref(1);

const urls = ref<any[] | null>(null);


onMounted(async () => {
  sessionState.loading = true;
  await sessionState.getUrls(currentPage.value);
  urls.value = sessionState.urls;
  sessionState.loading = false;
});

const handleDelete = async (id: string): Promise<void> => {
  sessionState.loading = true;
  const { data, error } = await supabase.from('urls').delete().eq('id', id);
  await sessionState.getUrls(currentPage.value);
  openToast('Link was successfully deleted', 'success');
  sessionState.loading = false;
};

watch(() => sessionState.urls, () => {
  urls.value = sessionState.urls;
});


function copyLink(url: string): void {
  navigator.clipboard.writeText(url);
  openToast('Link was copied', 'success');
}

async function nextPage() {
  if ((currentPage.value * pageSize.value) < urls.value!.length) currentPage.value++;
  await sessionState.getUrls(currentPage.value);
}

async function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
  await sessionState.getUrls(currentPage.value);
}


</script>

<style scoped lang="scss">
.history {
  padding-bottom: 2rem;

  &__inner {
    .title {
      margin-bottom: 4rem;
    }
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
  }

  &__table-actions {
    display: flex;
    gap: 1.25rem;
    justify-content: flex-end;
  }

  &__table-pagination {
    width: 100%;
    margin-top: 1.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  th {
    padding-block: 1.3rem;
    text-align: left;
    background-color: var(--color-very-dark-blue);
    color: var(--color-white);
    width: 100%;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: .8rem;
  }

  tr {
    &:nth-child(even) {
      background-color: var(--color-grayish-violet-transparent);
    }
  }

  tfoot {
    td {
      border: none;
      background: transparent;
    }
  }
}
</style>