<template>
  <div class="songFilterContent">
    <SongFilterComponent :activeFilter="activeFilter" @setFilter="setFilter" />
  </div>
  <table>
    <thead>
    <tr>
      <th class="table-main">TITLE</th>
      <th class="table-main">ARTIST</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="song in filteredSongs" :key="song.title">
      <td>{{ song.title }}</td>
      <td>{{ song.artist }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
import songsData from './songExport.js';
import { ref, watch } from 'vue';

const songs = songsData;
const activeFilter = ref('none');

const setFilter = (filter) => {
  activeFilter.value = filter;
};

const filteredSongs = ref([...songs]);

watch(activeFilter, () => {
  if (activeFilter.value === 'title') {
    filteredSongs.value = [...songs].sort((a, b) => a.title.localeCompare(b.title));
  } else if (activeFilter.value === 'artist') {
    filteredSongs.value = [...songs].sort((a, b) => a.artist.localeCompare(b.artist));
  } else if(activeFilter.value === 'none') {
    filteredSongs.value = [...songs];
  }
});

const logFilteredSongs = () => {
  console.log('Filtered Songs:', filteredSongs.value);
};
</script>

<style scoped>
.filter-button.active {
  font-weight: bold;
}
</style>
