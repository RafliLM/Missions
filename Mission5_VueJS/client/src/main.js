import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import appRouter from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(appRouter)
  .use(VueAxios, axios)
  .mount('#app')
