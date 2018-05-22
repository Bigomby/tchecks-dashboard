<template>
  <v-toolbar 
    color="primary" 
    fixed 
    dark 
    app
  >
    <v-toolbar-title class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="handleDrawerToggle" />
    </v-toolbar-title>

    <v-spacer />

    <v-menu
      :nudge-bottom="10"
      offset-y
      origin="center center"
      transition="scale-transition"
    >
      <v-btn 
        slot="activator" 
        icon 
        large 
        flat 
        @click="logout();"
      >
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppToolbar',

  methods: {
    logout() {
      this.$store.dispatch('LOGOUT');
      this.$router.push('/');
    },

    handleDrawerToggle() {
      this.$emit('drawer-toggled');
    },
  },
};
</script>
