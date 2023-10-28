<template>
  <div class="filter-content">
    <span class="filterText">Filter</span>
    <button :class="{ active: activeFilter === 'none' }" class="filter-button" @click="setFilter('none')">
      None
    </button>
    <button :class="{ active: activeFilter === 'title' }" class="filter-button" @click="setFilter('title')">
      Name
    </button>
    <button :class="{ active: activeFilter === 'artist' }" class="filter-button" @click="setFilter('artist')">
      Artist
    </button>
  </div>
</template>

<script setup>
import {ref, defineEmits} from 'vue';

const activeFilter = ref('none');
const emit = defineEmits();

const setFilter = (filter) => {
  activeFilter.value = filter;
  emit('setFilter', filter);
};
</script>
