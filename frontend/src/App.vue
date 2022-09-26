<template>
  <v-app style="background: #f4faff">
    <v-app-bar app color="primary" dark>
      <h2>Meeting organizer</h2>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-sheet rounded="lg" class="pa-5">
          <v-container>
            <h1>Welcome</h1>
            <v-btn @click="show = !show">Create</v-btn>
            <CreateBooking></CreateBooking>
          </v-container>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CreateBooking from "./components/CreateBooking.vue";

export default {
  name: "App",
  components: {
    CreateBooking,
  },
  data: () => ({
    show: false,
  }),
};
</script>

<style>
.app {
  background: "#f4faff";
}
</style>
