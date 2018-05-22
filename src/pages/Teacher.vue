<template>
  <v-card>
    <div class="wrapper primary">
      <div class="inner">
        <v-avatar 
          color="secondary" 
          size="128"
        >
          <span class="white--text display-3">{{ user.name[0] }}</span>
        </v-avatar>

        <h1>{{ user.name }}</h1>
      </div>
    </div>

    <v-card-text class="pa-0">
      <v-card class="elevation-0">
        <v-toolbar 
          card 
          dense 
          color="transparent"
        >
          <v-toolbar-title><h4>Últimos registros</h4></v-toolbar-title>
        </v-toolbar>

        <v-divider />

        <v-card-text class="pa-0">
          <v-list 
            two-line 
            class="pa-0"
          >
            <template v-for="(item, index) in orderedEntries">
              <v-list-tile 
                :key="index" 
                avatar
              >
                <v-list-tile-avatar color="primary">
                  <v-icon dark>person</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-sub-title>
                    {{ item.timestamp | formatDateFrom }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card-text>
      </v-card>
    </v-card-text>

    <v-btn 
      large 
      fab 
      dark 
      fixed 
      bottom 
      right 
      color="primary" 
      @click="addEntry"
    >
      <v-icon>watch_later</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment';

import { getTeacher, addEntry, getEntries } from '@/api/teachers';

export default {
  filters: {
    formatDateFrom(timestamp) {
      const date = new Date(timestamp * 1000);
      const formatted = moment(date).calendar();
      return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    },
  },

  data() {
    return {
      user: { name: '' },
      chat: null,
      selectedTab: null,
      entries: [],
    };
  },

  computed: {
    orderedEntries() {
      return this.entries.slice().sort((a, b) => b.timestamp - a.timestamp);
    },
    ...mapState({
      accessToken: state => state.accessToken,
    }),
  },

  async created() {
    this.user = await this.getTeacher(this.$route.params.id);
    this.entries = await getEntries(this.accessToken, this.$route.params.id);
  },

  methods: {
    async getTeacher() {
      const teacher = await getTeacher(this.accessToken, this.$route.params.id);
      return {
        ...teacher,
        avatar: `https://api.adorable.io/avatars/285/${teacher.name}.png`,
      };
    },

    async addEntry() {
      await addEntry(this.accessToken, this.$route.params.id, {
        entry: 'entry',
      });
      this.entries = await getEntries(this.accessToken, this.$route.params.id);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  height: 300px;
}

.inner {
  margin: auto;
  text-align: center;
  color: whitesmoke;
}
</style>
