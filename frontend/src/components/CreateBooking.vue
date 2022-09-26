<template>
  <v-stepper v-model="e6" class="my-5" outlined>
    <!-- <v-stepper-header>
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
    </v-stepper-header> -->

    <v-stepper-items>
      <v-stepper-content step="1">
        <h1>Select a day to hold the meeting</h1>
        <v-card elevation="0">
          <v-date-picker full-width v-model="date" class="my-3" />
          <v-divider class="mx-3" />
          <v-card-actions class="pa-5">
            <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
            <v-btn text> Cancel </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <h1>Pick a room to hold the meeting</h1>
        <ShowRooms @action="setRoom" @cancel="e6 = 1" />
      </v-stepper-content>

      <v-stepper-content step="3">
        <h1>Pick an available start and end time</h1>
        <PickHour :date="date"  :room="room" @action="e6 = 4" @cancel="e6 = 1" ref="pickHour"/>
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
import ShowRooms from "./ShowRooms.vue";
import PickHour from "./PickHour.vue";

export default {
  components: {
    ShowRooms,
    PickHour
  },
  data: () => {
    return {
      e6: 1,
      date: "2025-01-01",
      room: undefined
    };
  },
  methods: {
    setRoom(room) {
      this.room = room;
      this.e6 = 3
      this.$refs.pickHour.getBookings(room);
    }
  }
};
</script>

<style>
</style>