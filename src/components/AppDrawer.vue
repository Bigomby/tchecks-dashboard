<template>
  <v-navigation-drawer 
    id="appDrawer" 
    v-model="open" 
    fixed 
    app
  >
    <v-toolbar 
      color="primary" 
      dark
    >
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down"> {{ userData.name }} </span>
      </v-toolbar-title>
    </v-toolbar>

    <vue-perfect-scrollbar
      :settings="scrollSettings"
      class="drawer-menu--scroll primary"
    >
      <v-list 
        dark 
        expand
      >
        <template>
          <v-subheader> Menú </v-subheader>
          <v-list-tile 
            to="/teachers" 
            ripple="ripple"
          >
            <v-list-tile-action>
              <v-icon class="white--text">person</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title class="white--text">
                Listado de profesores
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

export default {
  name: 'AppDrawer',

  components: {
    VuePerfectScrollbar,
  },

  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    scrollSettings: {
      maxScrollbarLength: 160,
    },
  }),

  computed: {
    ...mapState({
      userData: state => state.userData,
    }),
  },
};
</script>

<style>
#appDrawer {
  overflow: hidden;
}

.drawer-menu--scroll {
  height: calc(100vh - 48px);
  overflow: auto;
}
</style>
