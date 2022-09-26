<template>
  <div>
    <v-text-field
      v-model="email"
      label="Email"
      prepend-icon="mdi-email"
    ></v-text-field>
    <v-dialog
      ref="start"
      v-model="start_modal"
      :return-value.sync="start_time"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="start_time"
          label="Start Time"
          prepend-icon="mdi-clock-time-four-outline"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="start_modal"
        v-model="start_time"
        full-width
        format="24hr"
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="start_modal = false">
          Cancel
        </v-btn>
        <v-btn text color="primary" @click="$refs.start.save(start_time)">
          OK
        </v-btn>
      </v-time-picker>
    </v-dialog>

    <v-dialog
      ref="end"
      v-model="end_modal"
      :return-value.sync="end_time"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="end_time"
          label="End Time"
          prepend-icon="mdi-clock-time-four-outline"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="end_modal"
        v-model="end_time"
        full-width
        format="24hr"
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="end_modal = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.end.save(end_time)">
          OK
        </v-btn>
      </v-time-picker>
    </v-dialog>

    <v-sheet height="400" class="mb-5">
      <v-calendar
        ref="calendar"
        v-model="date"
        type="day"
        :events="events"
        event-overlap-mode="column"
      ></v-calendar>
    </v-sheet>
    <v-divider class="mb-5" />
    <v-btn color="primary" @click="createBooking"> Create Booking </v-btn>
    <v-btn text @click="$emit('cancel')"> Cancel </v-btn>
  </div>
</template>

<script>
import { BookingsAPI } from "../api/meetingRoomAPI.js";

export default {
  name: "PickHour",
  props: ["room", "date"],
  data: () => {
    return {
      events: [],
      email: undefined,
      start_time: null,
      end_time: null,
      start_modal: false,
      end_modal: false,
    };
  },
  methods: {
    createBooking() {
      const new_booking = {
        room_id: this.room._id,
        booked_for: this.email,
        start_date: new Date(this.date + " " + this.start_time),
        end_date: new Date(this.date + " " + this.end_time),
      };
      BookingsAPI.create_booking(new_booking).then((res) => {
        if (res.status === 201) {
          // clear form
          this.reset()
          
          // send action back to parent component
          this.$emit("action", res.data);
        }
      });
    },
    getBookings(room) {
      BookingsAPI.find_by_room(room._id).then((res) => {
        if (res.status === 200) {
          const bookings = res.data;
          this.events = bookings.map((x) => {
            return {
              name: `Booked for ${x.booked_for}`,
              start: this.formatDate(new Date(x.start_date)),
              end: this.formatDate(new Date(x.end_date)),
            };
          });
        }
      });
    },
    reset() {
      this.email = undefined;
      this.end_time = undefined;
      this.start_time = undefined;
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