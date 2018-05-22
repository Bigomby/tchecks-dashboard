export default [
  {
    path: '*',
    redirect: { path: '/404' },
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
  },
  {
    path: '/403',
    name: 'AccessDenied',
    component: () => import('@/pages/Deny.vue'),
  },
  {
    path: '/500',
    name: 'ServerError',
    component: () => import('@/pages/Error.vue'),
  },
  {
    path: '/login',
    meta: { unAuth: true },
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/signup',
    meta: { unAuth: true },
    name: 'SignUp',
    component: () => import('@/pages/SignUp.vue'),
  },
  {
    path: '/',
    meta: { auth: true },
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        redirect: { path: '/dashboard' },
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/pages/Dashboard.vue'),
      },
      {
        path: 'teachers',
        name: 'Teachers',
        component: () => import('@/pages/Teachers.vue'),
      },
      {
        path: 'teachers/:id',
        name: 'Teacher',
        component: () => import('@/pages/Teacher.vue'),
      },
    ],
  },
];
