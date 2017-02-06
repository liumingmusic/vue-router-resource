import Vue from 'vue'
//路由和资源操作类库
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//muse相关类库
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
//使用 carbon 主题
import 'muse-ui/dist/theme-carbon.css'
//自定义相关组件
import App from './App.vue'

//组件全部加载使用
Vue.use(MuseUI)
Vue.use(VueRouter);
Vue.use(VueResource);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});
