<template>
  <v-stepper v-model="e6" flat class="my-5">
    <v-stepper-header>
      <v-stepper-step :complete="e6 > 1" step="1" color="primary">
        Select a date
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e6 > 2" step="2">
        Choose a room
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e6 > 3" step="3">
        Pick an available time
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4"> Overview </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
        <v-btn text @click="e6 = 1"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 1"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data: () => {
    return {
      e6: 1,
    };
  },
};
</script>

<style>
</style>