<script>
export default {
  data() {
    return {
      user: {
        name: "Renārs",
        surname: "Piesis",
        code: "IT21010",
        loggedIn: false,
        randomColor: '#000000'
      },
    };
  },
  computed: {
    fullName() {
      return this.user.name + ' ' + this.user.surname;
    },
    isLoggedIn(){
      return this.user.loggedIn;
    }
  },
  methods: {
    generateRandomColor() {
      this.user.randomColor = this.getRandomColor();
    },
    getRandomColor() {
      return '#' + Math.floor(Math.random()*16777215).toString(16);
    },
    userLog() {
      if (this.user.loggedIn) {
        const confirmLogout = window.confirm("Vai vēlaties izrakstīties?");
        if (confirmLogout) {
          this.logout();
        }
      } else {
        const confirmLogin = window.confirm("Vai vēlaties ielogoties?");
        if (confirmLogin) {
          this.generateRandomColor();
          this.login();
        }
      }
    },
    logout() {
      this.user.loggedIn = false;
      this.$emit("logout");
      console.log(this.user.loggedIn);
    },
    login() {
      this.user.loggedIn = true;
      this.$emit("login");
      console.log(this.user.loggedIn);
    }
  },
};
</script>

<template>
  <header :class="{ 'header-logged-in': isLoggedIn, 'header-logged-out': !isLoggedIn }">
    <div class="left-container">
      <div id="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor">
          <image xlink:href="@/assets/WhiteLogo.svg" width="48" height="48"/>
        </svg>
      </div>
      <div id="title">
        <h1>TIQLZ</h1>
      </div>
    </div>
    <div class="right-container">
      <div id="avatar" :style="{ backgroundColor: user.randomColor }"  v-if="isLoggedIn">
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

<style>
@import "@/assets/main.css";

</style>