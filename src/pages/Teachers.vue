<template>
  <div>
    <v-container 
      grid-list-xl 
      fluid
    >
      <v-layout 
        row 
        wrap
      >
        <v-layout 
          class="wrapper" 
          align-center 
          row
        >
          <v-flex> <div 
            fill-height 
            class="headline"
          >Profesores</div> </v-flex>
          <v-flex>
            <div class="add-teacher">
              <add-teacher @submit="createTeacher($event);" />
            </div>
          </v-flex>
        </v-layout>

        <v-flex lg12>
          <v-card>
            <v-toolbar 
              card 
              color="white"
            >
              <v-text-field
                v-model="search"
                flat
                solo
                prepend-icon="search"
                placeholder="Buscar profesor"
                hide-details
                class="hidden-sm-and-down"
              />
            </v-toolbar>

            <v-divider />

            <v-card-text class="pa-0">
              <v-data-table
                :headers="headers"
                :search="search"
                :items="teachers"
                :rows-per-page-items="[{ text: 'Todo', value: 100 }]"
                class="elevation-1"
                item-key="name"
              >
                <template 
                  slot="items" 
                  slot-scope="props"
                >
                  <td>
                    <v-avatar 
                      color="secondary white--text" 
                      size="32"
                    >
                      {{ props.item.name[0] }}
                    </v-avatar>
                  </td>
                  <td>
                    <router-link
                      :to="{ name: 'Teacher', params: { id: props.item.id } }"
                      class="accent--text no-underline"
                    >
                      {{ props.item.name }}
                    </router-link>
                  </td>
                  <td>{{ props.item.email }}</td>
                  <td>{{ props.item.code }}</td>
                  <td>
                    <div align="center">
                      <edit-teacher
                        :teacher="props.item"
                        @submit="editTeacher($event);"
                      />
                    </div>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import {
  getTeachers,
  createTeacher,
  updateTeacher,
  removeTeacher,
} from '@/api/teachers';
import AddTeacher from '@/components/AddTeacher';
import EditTeacher from '@/components/EditTeacher';

export default {
  components: {
    AddTeacher,
    EditTeacher,
  },

  data() {
    return {
      headers: [
        {
          text: 'Avatar',
          sortable: false,
          align: 'center',
          value: 'avatar',
          width: '100em',
        },
        {
          text: 'Nombre',
          value: 'name',
        },
        {
          text: 'Email',
          value: 'email',
        },
        {
          text: 'Código',
          value: 'code',
        },
        {
          text: 'Editar',
          align: 'center',
          width: '200em',
          sortable: false,
        },
      ],
      teachers: [],
      search: '',
    };
  },

  computed: {
    ...mapState({
      accessToken: state => state.accessToken,
    }),
  },

  async mounted() {
    this.teachers = await this.getTeachers();
  },

  methods: {
    async createTeacher(teacher) {
      await createTeacher(this.accessToken, teacher);
      this.teachers = await this.getTeachers();
    },

    async editTeacher({ id, teacher }) {
      if (!teacher) {
        await removeTeacher(this.accessToken, id);
      } else {
        await updateTeacher(this.accessToken, teacher);
      }

      this.teachers = await this.getTeachers();
    },

    async getTeachers() {
      const teachers = await getTeachers(this.accessToken);
      return teachers.map(teacher => ({
        ...teacher,
        avatar: `https://api.adorable.io/avatars/285/${teacher.name}.png`,
      }));
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding-left: 1em;
  padding-right: 1em;
}

.add-teacher {
  float: right;
}

.no-underline {
  text-decoration: none;
}
</style>
