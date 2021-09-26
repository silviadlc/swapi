<template>
    <v-dialog
      :value="true"
      persistent
      max-width="400"
    >
      <v-card>
        <v-card-title 
            class="text-h5"
        >
        </v-card-title>
        <v-card-text></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
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
        props:['item']
        
    };

</script>

<style>

</style>