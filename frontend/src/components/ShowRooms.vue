<template>
  <v-card outlined class="mb-5">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Capacity</th>
            <th class="text-left">Selected</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in rooms" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.capacity }}</td>
            <td>
              <v-scroll-x-transition>
                <v-icon v-if="selected === i" color="success" class="pl-2">
                  mdi-check
                </v-icon>
              </v-scroll-x-transition>
            </td>
            <td>
              <v-btn color="primary" small @click="bookRoom(i)"> Book </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-divider />
    <v-card-actions class="pa-5">
      <!-- TODO: pass selected room back to parent via emit -->
      <v-btn
        color="primary"
        :disabled="selected === undefined"
        @click="submitRoom"
      >
        Continue
      </v-btn>
      <v-btn text @click="$emit('cancel')"> Cancel </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { RoomsAPI } from "../api/meetingRoomAPI.js"

export default {
  name: "ShowRooms",
  created() {
    RoomsAPI.get_all().then((res) => {
      if (res.status === 200) {
        this.rooms = res.data
      }
    });
  },
  data: () => {
    return {
      selected: undefined,
      rooms: [],
    }
  },
  methods: {
    bookRoom(i) {
      if (i === this.selected) {
        // if same item is pressed unselect
        this.selected = undefined;
      } else {
        this.selected = i;
      }
    },
    reset() {
      this.selected = undefined
    },
    submitRoom() {
      this.$emit('action', this.rooms[this.selected])
    }
  },
};
</script>

<style>
</style>