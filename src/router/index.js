import { createRouter, createWebHistory } from 'vue-router';  // 修正: VueRouter -> createRouter
import ChatPage from '../views/ChatPage.vue';
import RegisterPage from '../views/RegisterPage.vue';

const routes = [
  { path: '/chat', component: ChatPage },
  { path: '/register', component: RegisterPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
