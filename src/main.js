import { createApp } from 'vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
require('./mock');

var app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(VueAxios, axios)

app.mount('#app');

router.beforeEach((to) => {
    if(to.name != 'login' && !store.state.isLogin){
        return {
            name: 'login'
        };
    }
})
