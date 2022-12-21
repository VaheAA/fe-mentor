import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faArrowCircleLeft, faArrowCircleRight, faClipboard, faTimes } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import router from './router';
library.add(faFacebook, faTwitter, faInstagram, faPinterest, faXmarkCircle, faSpinner, faArrowCircleLeft, faArrowCircleRight, faClipboard, faTimes);
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
