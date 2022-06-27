import { createApp } from 'vue';
import App from './App.vue';
import Router from './router/index';
import Store from './store/index';

import { Button, Icon, Swipe, SwipeItem } from 'vant';
import 'lib-flexible/flexible';
import 'vant/lib/index.css'; // 全局引入样式

const app = createApp(App);

app.use(Button)
    .use(Icon)
    .use(Swipe)
    .use(SwipeItem)

app.use(Router)
    .use(Store);
    
app.mount('#app');
