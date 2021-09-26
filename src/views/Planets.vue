<template>
  <v-card
    class="mx-auto my-12"
    elevation="3"
    outlined
    min-height="70vh"
    max-width="80vh"
  >
    <v-card-title
      class="text-center"
    >
      <h2>STAR WARS API</h2>
    </v-card-title>
    <v-card-subtitle class="pt-6">
      <h3>{{ title }}</h3>
    </v-card-subtitle>
    <v-card-text>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
        ></v-text-field>
      </v-card-title>
      <v-data-table
        class="px-10 w-80"
        :headers="headers"
        fixed-header
        :items="results"
        :items-per-page="5"
        :search="search"
      >
        <template v-slot:item.actions="{ item }">
            <v-btn
                class="ma-2"
                fab
                dark
                x-small
                color="grey"
            >
                <v-icon 
                    dark
                    dense
                >
                    mdi-eye
                </v-icon>
            </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions
      class="ml-8"
    >
        <GoBack />
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'
import GoBack from '@/components/GoBack'

  export default {
    name: 'Planets',
    components: {
        GoBack
    },
    data: () => ({
      search: '',
      results: [],
      title:'PLANETS'
    }),

    computed: {
      headers () {
        return [
          { text: 'Name',
          align: 'center',
          sortable: false,
          value: 'name',
          width: '50%'
        },
        { text: 'Actions',
          align: 'center',
          sortable: false,
          value: 'actions',
        }
        ]
      }
    },

    methods: {
      filterOnlyCapsText (value, search) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleLowerCase().indexOf(search) !== -1
      },
    },

    mounted () {
      axios.get('https://swapi.dev/api/planets').then((response) => {
        this.results = response.data.results
      })
    }
  }
</script>