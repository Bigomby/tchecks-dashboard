<template>
  <v-dialog 
    v-model="show" 
    max-width="500px"
  >
    <v-btn 
      slot="activator" 
      color="primary" 
      dark
    >
      <v-icon>add</v-icon> Añadir profesor
    </v-btn>

    <v-card>
      <v-card-title>
        <span class="headline">Nuevo Profesor</span>
      </v-card-title>

      <v-divider />

      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field 
                v-model="model.name" 
                label="Nombre" 
                required
              />
            </v-flex>

            <v-flex xs12>
              <v-text-field 
                v-model="model.email" 
                label="Email" 
                required
              />
            </v-flex>

            <v-flex xs12>
              <v-text-field 
                v-model="model.code" 
                label="Código" 
                required
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn 
          color="accent" 
          flat 
          @click.native="show = false;"
        >
          Cerrar
        </v-btn>
        <v-btn 
          color="accent" 
          flat 
          @click.native="submit();"
        > Guardar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      model: {},
    };
  },

  methods: {
    submit() {
      this.$emit('submit', {
        name: this.model.name,
        email: this.model.email,
        code: this.model.code,
      });
      this.show = false;
    },
  },
};
</script>
