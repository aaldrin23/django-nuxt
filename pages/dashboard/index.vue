<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-hover v-for="c in ['blue-grey','cyan','purple']" :key="c">
        <v-flex xs12 sm6 lg3 slot-scope="{ hover }">
          <v-card :color="c + ' darken-2'" class="white--text" :class="`elevation-${hover ? 12 : 2}`">
            <v-card-title primary-title>
              <div class="headline">Unlimited music now</div>
              <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark>Listen now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-hover>

    </v-layout>
    <v-divider></v-divider>
    <v-speed-dial fixed fab bottom right transition="slide-y-reverse-transition">
      <v-btn slot="activator" fab color="blue darken-2" dark>
        <v-icon>add</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-tooltip left>
        <v-btn slot="activator" fab dark small color="green">
          <v-icon>account_circle</v-icon>
        </v-btn>
        <span>User</span>
      </v-tooltip>
      <v-tooltip left>
        <v-btn slot="activator" fab dark small color="indigo">
          <v-icon>event</v-icon>
        </v-btn>
        <span>Event</span>
      </v-tooltip>
      <v-tooltip left>
        <v-btn slot="activator" fab dark small color="red">
          <v-icon>record_voice_over</v-icon>
        </v-btn>
        <span>Announcement</span>
      </v-tooltip>
    </v-speed-dial>
  </v-container>
</template>
<script>
export default {
	data() {
		return {
			fab: false
		};
	},
	mounted() {}
};
</script>
