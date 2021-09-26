<template>
  <span class="go-back">
    <v-btn 
      color="yellow text--darken-1"
      @click="goBack"
    >
      Go Home
    </v-btn>
  </span>
</template>
<script>

export default {
  methods: {
    goBack() {
      return this.$router.push('/')
    }
  }
}
</script>

