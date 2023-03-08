<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from 'primevue/breadcrumb';
import { ref } from 'vue';

</script>

<template>
  <div>
    <nav class="navbar navbar-light bg-light ">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/window.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Worawat
      </a>
    </nav>
  </div>
</template>

<style scoped>
.navbar-brand{
  margin: 0 20px;
  font-family: "Static", Helvetica, Arial;
}
.navbar{
  box-shadow: grey 0px 1px 5px;
}
</style>
