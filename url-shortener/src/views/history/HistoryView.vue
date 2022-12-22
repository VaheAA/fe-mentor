<template>
  <div class="history" v-if="!sessionState.loading">
    <div class="container">
      <div class="history__inner">
        <h1 class="title">Manage your links here!</h1>
        <Shortener />
        <h2 class="title title--secondary">My links</h2>
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
              <td data-label="Logn URL">{{ url.long_url }}</td>
              <td data-label="Short URL">{{ url.short_url }}</td>
              <td data-label="Actions">
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
          <TableLoadingSpinner v-if="sessionState.paginationLoading" />
        </table>
      </div>
    </div>
  </div>
  <LoadingSpinner v-else />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Shortener from '../../components/form/Shortener.vue';
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue';
import PaginationButton from '@/components/buttons/PaginationButton.vue';
import IconButton from '@/components/buttons/IconButton.vue';
import { supabase } from '@/db/supabase';
import { userSessionStore } from '@/stores/user';
import { useToastStore } from '@/stores/toast';
import { isNotEmpty } from '@/helpers/checkIfEmptyObject';
import TableLoadingSpinner from '@/components/ui/TableLoadingSpinner.vue';


const toastStore = useToastStore();
const { openToast } = toastStore();
const userStore = userSessionStore();
const sessionState = userStore();
const pageSize = ref(5);
const currentPage = ref(1);

const urls = ref<any[] | null>(null);


onMounted(async () => {
  if (isNotEmpty(sessionState.session?.user))
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
  sessionState.paginationLoading = true;
  if ((currentPage.value * pageSize.value) < urls.value!.length) currentPage.value++;
  await sessionState.getUrls(currentPage.value);
  sessionState.paginationLoading = false;

}

async function prevPage() {
  sessionState.paginationLoading = true;
  if (currentPage.value > 1) currentPage.value--;
  await sessionState.getUrls(currentPage.value);
  sessionState.paginationLoading = false;
}


</script>

<style scoped lang="scss">
.history {
  padding-bottom: 2rem;
  padding-top: 4rem;

  &__inner {
    .title {
      margin-bottom: 4rem;
    }
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
    position: relative;

    @media (max-width: 728px) {
      border: 0;
    }
  }

  thead {
    @media (max-width: 728px) {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
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

    @media (max-width: 728px) {
      border-bottom: 1px solid var(--color-grayish-violet-transparent);
      display: block;
      margin-bottom: .625rem;
    }
  }

  td {
    @media (max-width: 728px) {
      border-bottom: 1px solid var(--color-grayish-violet-transparent);
      display: block;
      font-size: 1.3rem;
      text-align: right;
    }

    &::before {
      @media (max-width: 728px) {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    &:last-child {
      @media (max-width: 728px) {
        border-bottom: 0;
      }
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