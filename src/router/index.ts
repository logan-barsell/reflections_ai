import { createRouter, createWebHistory } from 'vue-router';
import { Insights, Summary, Reflection, NotFound } from '../pages';

const routes = [
  { path: '/', redirect: '/reflect' },
  { path: '/reflect', name: 'Reflect', component: Reflection },
  { path: '/insights', name: 'Insights', component: Insights },
  { path: '/summary', name: 'Summary', component: Summary },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
