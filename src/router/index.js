import { createRouter, createWebHistory } from 'vue-router';
import Reflection from '../pages/Reflection.vue';
import Insights from '../pages/Insights.vue';
import Summary from '../pages/Summary.vue';

const routes = [
  { path: '/', redirect: '/reflect' },
  { path: '/reflect', name: 'Reflect', component: Reflection },
  { path: '/insights', name: 'Insights', component: Insights },
  { path: '/summary', name: 'Summary', component: Summary },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
