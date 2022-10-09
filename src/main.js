import { createSSRApp } from "vue";
import App from "./App.vue";
import 'uno.css'
import store from '@/store'
import uView from 'vk-uview-ui';

export function createApp() {
  const app = createSSRApp(App).use(store).use(uView);
  return {
    app,
  };
}
