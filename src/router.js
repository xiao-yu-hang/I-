import Vue from 'vue'
import Router from 'vue-router'

import NotFound from './views/NotFound.vue'
import Login from './views/Login.vue'
import Registe from './views/Registe.vue'
import forum from './views/forum.vue'
import Tourist from './views/Tourist.vue'
import note from './views/note.vue'
import Personal from './views/Personal.vue'
import Cart from './views/Cart.vue'
Vue.use(Router)
export default new Router({
    routes: [
        { path: '/Registe', component: Registe },
        { path: '/Tourist', component: Tourist },
        { path: '/Login', component: Login },
        { path:'/note',component: note},
        { path: "/forum", component: forum },
        { path: '/Personal', component: Personal },
        { path: '/Cart', component: Cart },
        { path: "/*", component: NotFound }
        
    ]
})