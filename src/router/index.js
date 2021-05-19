import Vue from 'vue'
import VueRouter from 'vue-router'

const TabBarHome = () =>
    import ('../views/home/Home');
const TabBarCategory = () =>
    import ('../views/category/Category');
const TabBarProfile = () =>
    import ('../views/profile/Profile');
const TabBarCart = () =>
    import ('../views/cart/Cart');
// 注入插件
Vue.use(VueRouter);
// 定义路由
const routes = [{
    path: '',
    component: TabBarHome
}, {
    path: '/home',
    component: TabBarHome
}, {
    path: '/category',
    component: TabBarCategory
}, {
    path: '/profile',
    component: TabBarProfile
}, {
    path: '/cart',
    component: TabBarCart
}];

const router = new VueRouter({
        routes,
        mode: 'history'
    })
    // 导出router实例
export default router
