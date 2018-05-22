import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';

import { login } from '@/api/auth';
import { loadUserData } from '@/api/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: '',
    userId: '',
    userData: {},
  },

  mutations: {
    SET_ACCESS_TOKEN(state, value) {
      state.accessToken = value;
    },

    SET_USER_ID(state, value) {
      state.userId = value;
    },

    SET_USER_DATA(state, value) {
      state.userData = value;
    },
  },

  actions: {
    async LOGIN({ commit }, { username, password }) {
      const { token, userId } = await login(username, password);

      commit('SET_ACCESS_TOKEN', token);
      commit('SET_USER_ID', userId);

      Cookies.set('accessToken', token, { expires: 1 });
      Cookies.set('userId', userId, { expires: 1 });
    },

    LOGOUT({ commit }) {
      Cookies.remove('accessToken');
      Cookies.remove('userId');

      commit('SET_ACCESS_TOKEN', '');
      commit('SET_USER_ID', '');
    },

    async LOAD_USER_DATA({ state, commit }) {
      const data = await loadUserData(state.accessToken, state.userId);
      commit('SET_USER_DATA', data);
    },
  },
});
