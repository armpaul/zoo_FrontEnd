import { createApp,Vue  } from 'vue'
import App from './App.vue'
import router from './router'

//chatgpt說boostrap-vue支持的是boostrap4，不支持boostrap5
//boostrap-vue-3支持boostrap5
import { BootstrapVue3 } from 'bootstrap-vue-3'

// 引入 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// 引入 Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App).use(router).use(BootstrapVue3).mount('#app')