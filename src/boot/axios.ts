import { boot } from 'quasar/wrappers';
import { defineBoot } from '#q-app/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
    $apimide: AxiosInstance;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
    $apimide: AxiosInstance;
  }
}

const UrlOverlay = '';
const nominatim = 'https://nominatim.openstreetmap.org/search?';

const apiUrlOverlay = axios.create({ baseURL: UrlOverlay });
const api = axios.create({ baseURL: 'https://api.example.com' });
const apiMide = axios.create({ baseURL: 'https://mide.monterrey.gob.mx/api/v2' });

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$apiUrlOverlay = apiUrlOverlay;
  app.config.globalProperties.$api = api;
  app.config.globalProperties.$apimide = apiMide;
});

export {
  apiUrlOverlay,
  api,
  apiMide
};
