import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/',
    name: 'Catalog',
    component: CatalogView,
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach((to, from, next) => {
  // Verificar si la ruta solicitada existe en las rutas definidas
  const exists = routes.some((route) => route.path === to.path)
  if (!exists) {
    // Si la ruta no existe, redirigir al menú principal
    next(`/catalog`)

    // next(`/smartlink/test`);

    // next(`/principalPage`);
  } else {
    // Si la ruta existe, continuar con la navegación normalmente
    next()
  }
})

export default router
