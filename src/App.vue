<template>
  <div>
    <HeaderComponent :loggedIn="isLoggedIn" @login="login" @logout="logout" />
    <div v-if="!isLoggedIn" class="landingPage">
      <LandingComponent />
    </div>
    <div v-if="isLoggedIn" class="content logged-in">
      <!-- Add the "logged-in" class when the user is logged in -->
      <router-view>
        <div class="left-content">
          <NavigationComponent :page="activePage" @aboutme="aboutme" @home="home" />
        </div>
        <div class="right-content">
          <div class="home-content" v-if="isHomeRoute">
            <HomeComponent />
          </div>
          <div class="home-content" v-if="isAboutRoute">
            <AboutMeComponent />
          </div>
        </div>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const router = useRouter();

const isLoggedIn = computed(() => store.state.user.loggedIn);
const activePage = computed(() => store.state.page.activePage);
const isHomeRoute = computed(() => route.path === '/home');
const isAboutRoute = computed(() => route.path === '/about-me');

const home = () => {
  store.commit('page/setPage', 'home');
  if (!isHomeRoute.value) {
    router.push('/home');
  }
};

const aboutme = () => {
  store.commit('page/setPage', 'aboutme');
  if (!isAboutRoute.value) {
    router.push('/about-me');
  }
};

const logout = () => {
  store.commit('user/logout');
  router.push('/');
  document.body.classList.remove('logged-in');
};

const login = () => {
  store.commit('user/login');
  router.push('/home');
  document.body.classList.add('logged-in');
};
</script>
