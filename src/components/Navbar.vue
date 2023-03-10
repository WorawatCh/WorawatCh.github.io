<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from 'primevue/breadcrumb';
import { ref } from 'vue';
import Knob from 'primevue/knob';
const value = ref(0)
window.onscroll = myFunction();
// myFunction()
function myFunction() {
  const element = document.documentElement;
  console.log('element',element)
  let y = element.scrollTop;
  console.log('y',y)
}
</script>

<template>
  <div>
    <nav class="navbar navbar-light bg-light ">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/window.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Worawat
      </a>
      <!-- <Knob v-model="value" /> -->
    </nav>
  </div>
</template>

<style scoped>
.navbar-brand{
  margin: 0 20px;
  font-family: "Static", Helvetica, Arial;
}
.navbar{
  width: 100%;
  box-shadow: grey 0px 1px 5px;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(131,237,164,1) 49%, rgba(0,224,143,1) 100%);
}
</style>
