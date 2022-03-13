import Index from '@/pages';
import Login from '@/pages/login';
import Home from '@/pages/home';

export default [
  {
    path: '/',
    Component: Index
  },
  {
    path: '/login',
    Component: Login
  },
  {
    path: '/home',
    Component: Home
  }
];
