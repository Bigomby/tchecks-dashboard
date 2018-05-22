<template>
  <v-app>
    <app-drawer :open="drawer" />
    <app-toolbar @drawer-toggled="drawer = !drawer;" />

    <v-content>
      <v-container class="page-wrapper"><router-view /></v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppDrawer from '@/components/AppDrawer';
import AppToolbar from '@/components/AppToolbar';

export default {
  components: {
    AppDrawer,
    AppToolbar,
  },

  data: () => ({
    drawer: true,
    expanded: true,
    rightDrawer: false,
    snackbar: {
      show: false,
      text: '',
      color: '',
    },
  }),

  created() {
    this.$store.dispatch('LOAD_USER_DATA');
  },
};
</script>

<style scoped>
.setting-fab {
  top: 50% !important;
  right: 0;
  border-radius: 0;
}

.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
}

main {
  background-color: #c9c47860;
}
</style>
