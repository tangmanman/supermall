import Vue from 'vue'
import Router from 'vue-router'

//安装插件
Vue.use(Router)

//创建路由对象
const Home = () =>
    import ('../viwes/home/Home')
const Category = () =>
    import ('../viwes/category/Category')
const Cart = () =>
    import ('../viwes/cart/Cart')
const Profile = () =>
    import ('../viwes/profile/Profile')
const routes = [

    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/Profile',
        component: Profile
    }

]
const router = new Router({
    routes,
    mode: 'history'

})
export default router