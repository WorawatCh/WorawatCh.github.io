import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "primevue/resources/themes/saga-blue/theme.css";
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import ToastService from 'primevue/toastservice';
import ScrollAnimation from './directives/scrollanimation'
import VueAnimateOnScroll from 'vue3-animate-onscroll';
import 'animate.css';

const app = createApp(App)
app.directive('scrollanimation', ScrollAnimation);
app.use(VueAnimateOnScroll);
app.use(router)
app.use(PrimeVue);
app.use(ToastService);
app.mount('#app')
