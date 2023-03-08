import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import Vuelidate from 'vuelidate';
import 'aos/dist/aos.css';

createApp(App)
    .use(router)
    .use(Vuelidate)
    .use(AOS.init({
        duration: 1200
    }))
    .mount('#app')
