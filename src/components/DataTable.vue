<template>
    <v-data-table
        class="px-10 w-80"
        :headers="headers"
        fixed-header
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
</template>

<script>
import axios from 'axios'

export default {

    data: () => ({
      search: '',
      people: [],
      starships: [],
      planets: []
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
            this.planets = response.data.results
        }),

        axios.get('https://swapi.dev/api/people').then((response) => {
            this.people = response.data.results
        }),

        axios.get('https://swapi.dev/api/starships').then((response) => {
            this.starships = response.data.results
        })
    }
}
</script>