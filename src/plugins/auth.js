import Cookies from 'js-cookie';

export default ({ store, router }) => {
  const accessToken = Cookies.get('accessToken');
  const userId = Cookies.get('userId');

  if (accessToken && userId) {
    store.commit('SET_ACCESS_TOKEN', accessToken);
    store.commit('SET_USER_ID', userId);
  }

  router.beforeEach((to, from, next) => {
    if (to.matched.some(({ meta }) => meta.auth) && !store.state.accessToken) {
      next({ path: '/login' });
      return;
    }

    if (to.matched.some(({ meta }) => meta.unAuth) && store.state.accessToken) {
      next({ path: '/' });
      return;
    }

    next();
  });
};
