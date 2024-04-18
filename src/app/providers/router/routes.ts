export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/main'),
  },
  {
    path: '/:id',
    name: 'Cocktail',
    component: () => import('@/pages/cocktail'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/pages/not-found'),
  },
];
