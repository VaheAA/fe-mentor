import { toRefs, reactive } from 'vue';

interface State<T> {
  loading: boolean;
  error: boolean;
  errorMessage: string;
  data: any;
}

export async function useShortener<T>(
  apiUrl: string,
  options?: Record<string, unknown>
) {
  const state = reactive<State<T>>({
    error: false,
    errorMessage: '',
    loading: false,
    data: null as any
  });

  const fetchData = async () => {
    state.loading = true;
    try {
      const response = await fetch(apiUrl, options);
      if (!response.ok) throw new Error(response.statusText);
      const { result } = await response.json();
      state.data = result;
    } catch (e) {
      if (e instanceof Error) {
        state.error = true;
        state.errorMessage = e.message;
      }
    } finally {
      state.loading = false;
    }
  };

  await fetchData();

  return { ...toRefs(state) };
}
