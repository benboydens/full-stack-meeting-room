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
          <v-divider />
          <v-text-field
            v-model="people"
            type="number"
            label="Number of people"
            prepend-icon="mdi-account-multiple"
          ></v-text-field>
          <v-date-picker full-width v-model="date" class="my-3" />
          <v-divider />
          <v-card-actions class="pa-5">
            <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <h1>Pick a room to hold the meeting</h1>
        <ShowRooms @action="setRoom" @cancel="reset" ref="showRooms" />
      </v-stepper-content>

      <v-stepper-content step="3">
        <h1>Pick an available start and end time</h1>
        <PickHour
          :date="date"
          :room="room"
          @action="showResult"
          @cancel="reset"
          ref="pickHour"
        />
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card outlined class="mb-12" height="200px" v-if="room && booking">
          <v-card-title> Overview </v-card-title>
          <v-card-text>
            <ul>
              <li><b>Date: </b> {{ date }}</li>
              <li><b>Room: </b> {{ room.name }}</li>
              <li>
                <b>Start Date: </b>
                {{ formatDate(new Date(booking.start_date)) }}
              </li>
              <li>
                <b>End Date: </b> {{ formatDate(new Date(booking.end_date)) }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <v-btn color="primary" @click="reset"> Finish </v-btn>
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
    PickHour,
  },
  data: () => {
    return {
      e6: 1,
      people: undefined,
      date: "2025-01-01",
      room: undefined,
      booking: undefined,
    };
  },
  methods: {
    setRoom(room) {
      this.room = room;
      this.e6 = 3;
      this.$refs.pickHour.getBookings(room);
    },
    showResult(booking) {
      this.e6 = 4;
      this.booking = booking;
    },
    reset() {
      this.$refs.pickHour.reset();
      this.$refs.showRooms.reset();
      this.date = "2025-01-01";
      this.room = undefined;
      this.booking = undefined;
      this.people = undefined
      this.e6 = 1;
    },
    formatDate(d) {
      let dformat =
        [d.getFullYear(), d.getMonth() + 1, d.getDate()].join("-") +
        " " +
        [d.getHours(), d.getMinutes()].join(":");
      return dformat;
    },
  },
};
</script>

<style>
</style>