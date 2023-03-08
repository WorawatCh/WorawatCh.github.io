<script setup>
import { ref } from 'vue';
import About from '../components/About.vue'
import Skill from '../components/Skill.vue'
import Personal from '../components/Personal.vue'
import Experience from '../components/Experience.vue'
import SpeedDial from 'primevue/speeddial';
import Contact from '../components/Contact.vue'


const items = ref( [
    {
        label: 'Contact',
        icon: 'pi pi-info-circle',
        command: () => {
            const element = document.getElementById('contact');
            element.scrollIntoView({ behavior: 'smooth' });
        }
    },
    {
        label: 'Experience',
        icon: 'pi pi-book',
        command: () => {
            const element = document.getElementById('experience');
            element.scrollIntoView({ behavior: 'smooth' });
        }
    },
    {
        label: 'Skill',
        icon: 'pi pi-th-large',
        command: () => {
            const element = document.getElementById('skill');
            element.scrollIntoView({ behavior: 'smooth' });
        }
    },
    {
        label: 'Personal Information',
        icon: 'pi pi-file',
        command: () => {
            const element = document.getElementById('personal');
            element.scrollIntoView({ behavior: 'smooth' });
        }
    },
    {
        label: 'About',
        icon: 'pi pi-external-link',
        command: () => {
            const element = document.getElementById('about');
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
])
</script>

<template>
    <div class="speeddial-tooltip-demo" >
      <About id="about"/>
      <Personal id="personal"/>
      <Skill id="skill"/>
      <Experience id="experience"/>
      <Contact id="contact"/>
      <SpeedDial :model="items" direction="up" style="position: fixed" :transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClass="p-button-outlined" class="speeddial-right"  :tooltipOptions="{position: 'left'}" />
    </div>
</template>
<style scoped>
.speeddial-tooltip-demo::v-deep(.p-speeddial-direction-up.speeddial-right) {
  right: 20px;
  bottom: 20px;
}
/* .speeddial-tooltip-demo{
  position: relative; 
  height: calc(100vh - 100px);
  z-index:100;
} */
</style>
