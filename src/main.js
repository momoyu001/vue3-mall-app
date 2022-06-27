import { createApp } from 'vue';
import App from './App.vue';
import Router from './router/index';
import { Button } from 'vant';
import 'lib-flexible/flexible'
import 'vant/lib/index.css'; // 全局引入样式

const app = createApp(App);

app.use(Router)
    .use(Button)
    .mount('#app')
