<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link.title"
          :to="link.to"
        >
           {{ link.title }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import People from './views/People.vue'

  export default {
    data: () => ({
      links: [
        {
          title: 'People',
          to: '/people',
        },
        {
          title: 'Starships',
          to: '/starships'
        },
        {
          title: 'Planets',
          to: '/planets'
        }
      ],
    }),
    components: {
      'People': People
    }
  }
</script>