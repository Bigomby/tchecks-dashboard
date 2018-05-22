<template>
  <v-dialog
    v-model="show"
    max-width="500px"
  >
    <v-btn
      slot="activator"
      outline
      icon
      fab
      dark
      color="accent"
      small
    >
      <v-icon>edit</v-icon>
    </v-btn>

    <v-card>
      <v-card-title>
        <span class="headline">Editar Profesor</span>
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

      <v-dialog
        v-model="showConfirmation"
        max-width="400px"
      >
        <v-card>
          <v-card-text>
            ¿Está seguro que desea eliminar este elemento?
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="red darken-1"
              flat
              @click.native="remove();"
            >
              Eliminar
            </v-btn>
            <v-spacer />
            <v-btn
              color="accent"
              flat
              @click.native="showConfirmation = false;"
            >
              No eliminar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-card-actions>
        <v-btn
          color="red darken-1"
          flat
          @click.native="showConfirmation = true;"
        >
          Eliminar
        </v-btn>
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
        >
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    teacher: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      show: false,
      showConfirmation: false,
      model: {},
    };
  },

  watch: {
    show() {
      this.model = { ...this.teacher };
    },
  },

  created() {
    this.model = { ...this.teacher };
  },

  methods: {
    submit() {
      this.$emit('submit', {
        teacher: {
          id: this.model.id,
          name: this.model.name,
          email: this.model.email,
          code: this.model.code,
        },
      });
      this.show = false;
    },

    remove() {
      this.$emit('submit', { id: this.model.id });
      this.show = false;
    },
  },
};
</script>
