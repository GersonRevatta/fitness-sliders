// import { createApp } from 'vue';
// import App from './App.vue';
// import PrimeVue from 'primevue/config';

// // Estilos de PrimeVue
// import "primevue/resources/themes/lara-light-blue/theme.css"; // Tema
// import "primevue/resources/primevue.min.css"; // Core CSS
// import "primeicons/primeicons.css"; // Iconos
// import "primeflex/primeflex.css"; // Utilidades de diseño

// const app = createApp(App);

// app.use(PrimeVue);
// app.mount('#app');

// import "primevue/resources/themes/saga-blue/theme.css"; // Cambiar a un tema existente
// import "primevue/resources/primevue.min.css"; // Core CSS

// import "primevue/resources/themes/lara-light-blue/theme.css"; // Tema
// import "primevue/resources/primevue.min.css"; // Core CSS
// import "primeicons/primeicons.css"; // Iconos


// *** origina el de abajo 

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import '@/assets/main.css'

import Aura from '@primevue/themes/aura';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
      preset: Aura
  }
});
// app.use(PrimeVue);

app.mount('#app')
