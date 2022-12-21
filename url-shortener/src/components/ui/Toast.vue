<template>
  <Teleport to="#toast">
    <Transition>
      <div class="toast-container" v-if="toast.isOpen"
        :style="{ backgroundColor: toast.status === 'error' ? 'hsl(0, 87%, 67%)' : 'hsl(180, 66%, 49%)' }">
        <span class="toast-message">{{ toast.message }}</span>
        <button class="toast-btn" @click="closeToast">
          <font-awesome-icon icon="fa-regular fa-xmark-circle" />
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useToastStore } from '@/stores/toast'


const toastStore = useToastStore();

const { toast } = toastStore();

function closeToast() {
  toast.isOpen = false;
  toast.message = '';
  toast.status = '';
};

watch(toast, () => {
  setTimeout(closeToast, 3000);
});

</script>

<style scoped lang="scss">
.toast-container {
  width: min(100% - 2rem, 30rem);
  padding: 2rem 2.25rem;
  margin: 2rem;
  border-radius: 10px;
  display: flex;
  align-items: baseline;
  gap: 2rem;
  z-index: 999;
  position: absolute;
  right: 0;
  bottom: 0;
}

.toast-message {
  color: var(--color-white);
}

.toast-btn {
  margin-left: auto;
  background-color: transparent;
  color: var(--color-white);
  cursor: pointer;
  border: none;
  font-size: 2rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>