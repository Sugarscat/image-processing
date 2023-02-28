import {createRouter, createWebHashHistory} from 'vue-router'
const routerArray = ['/', '/change', '/compress', '/promote', '/ai','/about', '/404']

function checkRouter(routerPath) {
    for (let i = 0; i < routerArray.length; i++){
        if (routerPath === routerArray[i]){
            return true;
        }
    }
    return false;
}

const routes = [
    { path: '/', redirect: '/change' },
    { path: '/change', component: ()=> import("@/web/components/Change.vue") },
    { path: '/compress', component: ()=> import("@/web/components/Compress.vue") },
    { path: '/promote', component: ()=> import("@/web/components/Promote.vue") },
    { path: '/ai', component: ()=> import("@/web/components/Ai.vue") },
    { path: '/about', component: ()=> import("@/web/components/About.vue") },
    { path: '/404', component: ()=> import("@/web/components/C404.vue") },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

router.beforeEach((to, from, next) => {
    if (!checkRouter(to.path)) {
        next('/404');
    }
    else{
        next();
    }
})

export default router
