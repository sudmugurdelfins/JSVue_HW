<template>
  <div class="formComponent">
    <button @click="toggleEditForm" class="edit-form">Edit Form</button>
    <form>
      <label>First name</label>
      <input v-model="user.firstName" :disabled="isEditing" :style="inputStyles" @input="updateUser('firstName')" />
      <label>Last name</label>
      <input v-model="user.lastName" :disabled="isEditing" :style="inputStyles" @input="updateUser('lastName')" />
      <label>Student code</label>
      <input v-model="user.studentCode" :disabled="isEditing" :style="inputStyles" @input="updateUser('studentCode')" />
    </form>
    <div class="loggedNotification">
      <label>Logged in at</label>
      <div>{{ user.loggedInAt }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const user = computed(() => store.state.user);
const isEditing = computed(() => user.value.isEditing);
const inputStyles = computed(() => (isEditing.value ? {} : {}));
const localUser = ref(JSON.parse(JSON.stringify(user.value)));

const toggleEditForm = () => {
  store.commit('toggleEditing');
};

const updateUser = (field) => {
  localUser.value[field] = user.value[field];
  store.commit(`set${field.charAt(0).toUpperCase() + field.slice(1)}`, localUser.value[field]);
};
</script>
