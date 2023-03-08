import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage.vue')
  },
  {
    path: '/formulariomotorista',
    name: 'formulariomotorista',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormularioCadastro.vue')
  },
  {
    path: '/formulariescritorio',
    name: 'formulariescritorio',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormularioEscritorio.vue')
  },
  {
    path: '/envioComSucesso',
    name: 'envioComSucesso',
    component: () => import(/* webpackChunkName: "about" */ '../views/EnvioComSucesso.vue')
  },
  {
    path: '/ErroAoEnvio',
    name: 'ErroAoEnvio',
    component: () => import(/* webpackChunkName: "about" */ '../views/ErroAoEnvio.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
