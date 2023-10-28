<template>
  <header :class="{ 'header-logged-in': isLoggedIn, 'header-logged-out': !isLoggedIn }">
    <div class="left-container">
      <div id="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor">
          <image xlink:href="@/assets/WhiteLogo.svg" width="48" height="48" />
        </svg>
      </div>
      <div id="title">
        <h1>TIQLZ</h1>
      </div>
    </div>
    <div class="right-container">
      <div id="avatar" :style="{ background: avatarColor }" v-if="isLoggedIn">
      </div>
      <div id="full-name" v-if="isLoggedIn"> {{ fullName }}</div>
      <div id="logout-button" v-if="isLoggedIn">
        <button @click="userLog">LOGOUT</button>
      </div>
      <div id="login-button" v-if="!isLoggedIn">
        <button @click="userLog">LOGIN</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const userRef = computed(() => store.state.user);

const userLog = () => {
  if (userRef.value.loggedIn) {
    const confirmLogout = window.confirm('Do you want to log out?');
    if (confirmLogout) {
      store.commit('logout');
      router.push('/');
      document.body.classList.remove('logged-in');
    }
  } else {
    const confirmLogin = window.confirm('Do you want to log in?');
    if (confirmLogin) {
      store.commit('login');
      avatarColor = getRandomColor();
      router.push('/home');
      document.body.classList.add('logged-in');
    }
  }
};

let avatarColor = "#00000";

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const fullName = computed(() => {
  return userRef.value.firstName + ' ' + userRef.value.lastName;
});

const isLoggedIn = computed(() => {
  return userRef.value.loggedIn;
});
</script>
<style>
@import "@/assets/main.css";
</style>
