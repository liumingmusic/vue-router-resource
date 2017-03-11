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
import App from './App'

//路由文件
import Index from './components/views/index'
import Read from './components/views/read'
import Person from './components/views/person'
import Setting from './components/views/setting'

//组件全部加载使用
Vue.use(MuseUI)
Vue.use(VueRouter);
Vue.use(VueResource);

//路由文件配置
const routes = [{
    path: '/',
    component: Index //重定向
},{
    path: '/index',
    component: Index
},{
    path: '/read',
    component: Read
},{
    path: '/person',
    component: Person
},{
    path: '/setting',
    component: Setting
}];

//路由组装
const router = new VueRouter({
    routes: routes
});

//初始化入口
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});