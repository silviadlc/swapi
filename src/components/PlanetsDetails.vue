<template>
  <v-dialog
    :value="true"
    persistent
    max-width="400"
  >
    <v-card>
      <v-card-title class="text-h5">
          {{ item.name }}
      </v-card-title>
      <v-card-text
        bold
      >
        Terrain: {{ item.terrain }}<br>
        Climate: {{ item.climate }}<br>
        Population: {{ item.population }}<br>
        Diameter: {{ item.diameter }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="red darken-4"
          text
          @click="$emit('close')"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    item: {
        type: Object,
        required: true,
        default: { name: '' , terrain: '', climate: '', population: '', diameter: ''}
        },
    }
}
</script>

<style>
</style>