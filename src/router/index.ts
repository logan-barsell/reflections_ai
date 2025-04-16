import { createRouter, createWebHistory } from 'vue-router';
import {
  Insights,
  Summary,
  Reflection,
  NotFound,
  AuthPage,
  HomePage,
  SupportPage,
} from '../pages';
import { useAuthStore } from '@stores/index';

const routes = [
  // Private / Auth Required Routes
  { path: '/reflect', name: 'Reflect', component: Reflection },
  { path: '/insights', name: 'Insights', component: Insights },
  { path: '/summary', name: 'Summary', component: Summary },
  // Public Routes
  { path: '/', redirect: '/home' },
  { path: '/auth', name: 'Auth Page', component: AuthPage },
  { path: '/home', name: 'Home Page', component: HomePage },
  { path: '/support', name: 'Support Page', component: SupportPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route guard to handle redirects
router.beforeEach((to, _from, next) => {
  const auth = useAuthStore();

  const publicPages = ['/auth', '/support', '/home'];
  const authRequired = !publicPages.includes(to.path);

  // If not authenticated, redirect pvt routes to /auth page
  if (authRequired && !auth.isAuthenticated) {
    return next('/auth');
  }
  // If authenticated, redirect / to /reflect page
  if (auth.isAuthenticated && to.path === '/') {
    return next('/reflect');
  }

  // If authenticated, redirect /auth to /reflect page
  if (auth.isAuthenticated && to.path === '/auth') {
    return next('/reflect');
  }

  next();
});

export default router;
