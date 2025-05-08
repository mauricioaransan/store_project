// import './assets/main.css'
// import './assets/style.css'

// import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/tailwind.css'

import App from './App.vue'
import router from './router'

// import { vuetify } from './plugins/vuetify'
// import 'vuetify/styles'

const app = createApp(App)

app.use(createPinia())
// app.use(vuetify)
app.use(router)

app.mount('#app')
