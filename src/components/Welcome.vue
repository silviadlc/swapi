<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/starwars.svg')"
          contain
          height="300"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3 yellow--text text--darken-1">
          SWAPI
        </h1>

        <p class="subheading font-weight-regular">
          The Star Wars API
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          The Star Wars data you've ever wanted:
        </h2>
        <br>
        <v-row justify="center">
          <v-btn
            class="subheading mx-3"
            target="_blank"
            color="yellow text--darken-1"
            @click="$router.push('people')"
          >
            PEOPLE
          </v-btn>
          <v-btn
            class="subheading mx-3"
            target="_blank"
            color="yellow text--darken-1"
            @click="$router.push('starships')"
          >
            STARSHIPS
          </v-btn>
          <v-btn
            class="subheading mx-3"
            target="_blank"
            color="yellow text--darken-1"
            @click="$router.push('planets')"
          >
            PLANETS
          </v-btn>
        </v-row>

      </v-col>
       <v-col
        class="mb-5"
        cols="12"
      >
        <p class="subheading font-weight-regular">
          From all SEVEN Star Wars films.
        </p>
        <p class="subheading font-weight-black display-1">
          Now with The Force Awakens data!
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
  }
</script>
