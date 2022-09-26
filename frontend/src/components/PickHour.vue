<template>
  <div>
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
        v-model="value"
        type="day"
        :events="events"
        event-overlap-mode="column"
      ></v-calendar>
    </v-sheet>
    <v-divider class="mb-5"/>
    <v-btn color="primary" @click="$emit('action')" > Continue </v-btn>
    <v-btn text @click="$emit('cancel')"> Cancel </v-btn>
  </div>
</template>

<script>
export default {
  name: "PickHour",
  data: () => {
    return {
      value: "2025-01-01",
      events: [
        {
          name: "Weekly Meeting",
          start: "2025-01-01 5:00",
          end: "2025-01-01 7:00",
        },
        {
          name: `Thomas' Birthday`,
          start: "2025-01-01 9:00",
          end: "2025-01-01 10:00",
        },
        {
          name: "Mash Potatoes",
          start: "2025-01-01 12:30",
          end: "2025-01-01 15:30",
        },
      ],
      start_time: null,
      end_time: null,
      start_modal: false,
      end_modal: false,
    };
  },
};
</script>

<style>
</style>