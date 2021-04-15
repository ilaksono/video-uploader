import LoginView from 'views/LoginView';
import HomeView from 'views/HomeView';

export default [
  {
    component: LoginView,
    title: 'Login',
    path: '/auth'
  },
  {
    component: HomeView,
    title: 'Home',
    path: '/home'
  }
];

