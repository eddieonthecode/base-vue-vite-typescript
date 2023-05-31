import '@/assets/scss/index.scss';

import { createApp } from 'vue'
import App from './App.vue'

// @ts-ignore
import {i18n} from '@/i18n/i18n.js';
// @ts-ignore
import store from '@/store';
import router from '@/router';

const app = createApp(App)

app.use(i18n);
app.use(router);
app.use(store);

app.mount('#app');
