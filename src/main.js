import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { store, key } from './store';

const app = createApp(App);

app.use(key).use(store).mount('#app');
