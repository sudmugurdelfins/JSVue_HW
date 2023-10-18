<script>
export default {
  data() {
    return {
      activePage: "home"
    };
  },
  methods: {
    home() {
      if (this.activePage !== "home") {
        this.activePage = "home";
        this.$emit("home");
      }
    },
    aboutme() {
      if (this.activePage !== "aboutme") {
        this.activePage = "aboutme";
        this.$emit("aboutme");
      }
    },
  },
};
</script>

<template>
  <div class="navigation">
    <div class="navigation">
      <ul>
        <li @click="home" :class="{ active: activePage === 'home' }">HOME</li>
        <li @click="aboutme" :class="{ active: activePage === 'aboutme' }">ABOUT ME</li>
      </ul>
    </div>
  </div>
</template>

<style>
@import "@/assets/main.css";
</style>