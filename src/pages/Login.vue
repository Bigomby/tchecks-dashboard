<template>
  <v-app 
    id="login" 
    class="primary"
  >
    <v-content>
      <v-container 
        fluid 
        fill-height
      >
        <v-layout 
          align-center 
          justify-center
        >
          <v-flex 
            xs12 
            sm8 
            md4 
            lg4
          >
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <h1 class="flex my-4 primary--text">Iniciar sesión</h1>
                </div>

                <v-form>
                  <v-text-field
                    v-model="model.username"
                    append-icon="person"
                    name="login"
                    label="Email"
                    type="text"
                  />
                  <v-text-field
                    id="password"
                    v-model="model.password"
                    append-icon="lock"
                    name="password"
                    label="Contraseña"
                    type="password"
                  />
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  :loading="loading"
                  block
                  color="primary"
                  @click="submit();"
                >
                  Acceder
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    model: {
      username: '',
      password: '',
    },
  }),

  methods: {
    async submit () {
      await this.$store.dispatch('LOGIN', {
        username: this.model.username,
        password: this.model.password,
      });

      this.$router.push('/');
    },
  },
};
</script>
<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
