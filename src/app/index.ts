import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueLazyload from 'vue-lazyload';

import App from './App.vue';
import { router } from './providers';

export const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueLazyload);
