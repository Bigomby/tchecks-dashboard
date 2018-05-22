<template>
  <div id="appRoot"><router-view /></div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  created() {
    moment.locale('es');
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('LOGOUT');
          this.$router.push('/');
        }

        return Promise.reject(error);
      },
    );
  },
};
</script>
