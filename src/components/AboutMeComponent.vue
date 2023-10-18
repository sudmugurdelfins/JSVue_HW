<script>
export default {
  data() {
    return {
      user: {
        name: "Renārs",
        surname: "Piesis",
        code: "IT21010",
      },
    };
  },
};
</script>

<template>
  <div class="aboutme-content">
    <div class="aboutme-title">
      <h1>ABOUT ME</h1>
    </div>
    <div class="aboutme-name">
      <h3><span class="text">Name:</span> <span class="value">{{this.user.name}}</span></h3>
      <h3><span class="text">Surname:</span> <span class="value">{{this.user.surname}}</span></h3>
      <h3><span class="text">Code:</span> <span class="value">{{this.user.code}}</span></h3>
    </div>
  </div>
</template>

<style scoped>

</style>