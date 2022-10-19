import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { FaArrowLeft, FaSearch, BiSearch, FaMoon } from 'oh-vue-icons/icons';

addIcons(FaArrowLeft, FaSearch, BiSearch, FaMoon);

const app = createApp(App);

app.use(router);
app.component('v-icon', OhVueIcon);
app.mount('#app');
