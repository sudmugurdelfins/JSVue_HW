<script setup>


</script>
<template>
  <HeaderComponent @login="login" @logout="logout" :loggedIn="loggedIn"/>
  <body>
  <div class="content" v-if="isLoggedIn">
    <div class="left-content">
      <NavigationComponent @home="home" @aboutme="aboutme" :page="page" />
    </div>
    <div class="right-content">
      <div class="home-content" v-if="isHome">
        <HomeComponent />
      </div>
      <div class="aboutme-content" v-if="isAboutme">
        <AboutMeComponent />
      </div>
    </div>

  </div>

  </body>
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HomeComponent from "@/components/HomeComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import AboutMeComponent from './components/AboutMeComponent.vue';
export default {
  data() {
    return {
      loggedIn: false,
      page: 'home',
    };
  },
  components: {
    HeaderComponent,
    HomeComponent,
    NavigationComponent,
    AboutMeComponent
  },
  computed: {
    isLoggedIn() {
      return this.loggedIn;
    },
    isHome() {
      return this.page === 'home';
    },
    isAboutme() {
      return this.page === 'aboutme';
    },
  },
  methods: {
    home() {
      this.page = 'home';
      console.log(this.page);
    },
    aboutme() {
      this.page = 'aboutme';
      console.log(this.page);
    },
    login() {
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
      this.page = 'home';
    },
  },
};
</script>
<style>
@import "@/assets/main.css";
</style>
