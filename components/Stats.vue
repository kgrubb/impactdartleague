<template>
  <section class="section table-container mt-6">
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Number</th>
          <th>Player</th>
          <th>Matches Played</th>
          <th>Match W/L %</th>
          <th>Rounds Played</th>
          <th>Rounds W/L %</th>
          <th>Flag Captures</th>
          <th>Total Points</th>
          <th>Match Score Average</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in playerList" :key='player'>
          <td>{{player.Number}}</td>
          <td>{{player.Player}}</td>
          <td>{{player['Matches Played']}}</td>
          <td>{{player['Match W/L %']}}</td>
          <td>{{player['Rounds Played']}}</td>
          <td>{{player['Rounds W/L %']}}</td>
          <td>{{player['Flag Captures']}}</td>
          <td>{{player['Total Points']}}</td>
          <td>{{player['Match Score Average']}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import * as Papa from 'papaparse';

export default {
  data() {
    return {
      playerList: [],
    };
  },
  mounted() {
    this.getPlayerStats();
  },
  methods: {
    async getPlayerStats() {
      await Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vTCukHpB9YZ-z3unlA-hArkaWaSkeVXXFFD5cwC7WfandM6xN_tz6tYdN9TkKBwC1iA9540iS8F14PS/pub?gid=0&single=true&output=csv', {
        download: true,
        header: true,
        complete: (res) => {
          this.playerList = res.data;
        },
      });
    },
  },
};
</script>
