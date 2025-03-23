import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ChatPage from '../views/ChatPage.vue';
import RegisterPage from '../views/RegisterPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/chat', component: ChatPage },
  { path: '/register', component: RegisterPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
