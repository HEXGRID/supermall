import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
// 引入vant
import vant from "vant";
import { Toast } from 'vant';
import { Dialog } from 'vant';
import "vant/lib/index.css";
// import { Lazyload } from "vant";
import 'lib-flexible/flexible.js'


const app=createApp(App)

if (process.env.NODE_ENV === 'development') {
  // if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
  //   window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
  // }
  app.config.devtools = true
}
app.use(Toast)
app.use(Dialog)
app.use(router).use(store).use(vant).mount('#app')
 