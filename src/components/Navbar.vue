<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from 'primevue/breadcrumb';
import { ref, onMounted } from 'vue';
import Knob from 'primevue/knob';
import { useWindowScroll } from '@vueuse/core'

const pos = ref(0)
document.onscroll = function(){ 
  pos.value = getVerticalScrollPercentage(document.body)
  pos.value= (Math.round(pos.value) > 100 ? 100:  Math.round(pos.value))
}
function getVerticalScrollPercentage( elm ){
  var p = elm.parentNode
  console.log('elm scrollTop',elm.scrollTop)
  console.log('p scrollTop',p.scrollTop)
  console.log('p scrollHeight',p.scrollHeight)
  console.log('p clientHeight',p.clientHeight)
  return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
}
</script>

<template>
  <div>
    <nav class="navbar navbar-light bg-light sticky">
      <span class="navbar-brand " >
        <img src="../assets/img/window.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Worawat
      </span>
      <Knob v-model="pos" :size="65" style="margin: 0 20px"/>
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
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;
}
</style>
