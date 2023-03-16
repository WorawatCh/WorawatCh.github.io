<script setup>
import { ref,onMounted,computed  } from 'vue';
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
            const y = element.getBoundingClientRect().top + window.pageYOffset - 90
            window.scrollTo({top:y, behavior: 'smooth' });
        }
    },
    {
        label: 'Experience',
        icon: 'pi pi-book',
        command: () => {
            const element = document.getElementById('experience');
            const y = element.getBoundingClientRect().top + window.pageYOffset - 90
            window.scrollTo({top:y, behavior: 'smooth' });
        }
    },
    {
        label: 'Skill',
        icon: 'pi pi-th-large',
        command: () => {
            const element = document.getElementById('skill');
            const y = element.getBoundingClientRect().top + window.pageYOffset - 90
            window.scrollTo({top:y, behavior: 'smooth' });
        }
    },
    {
        label: 'Personal Information',
        icon: 'pi pi-file',
        command: () => {
            const element = document.getElementById('personal');
            const y = element.getBoundingClientRect().top + window.pageYOffset - 90
            window.scrollTo({top:y, behavior: 'smooth' });
        }
    },
    {
        label: 'About',
        icon: 'pi pi-user',
        command: () => {
            const element = document.getElementById('about');
            const y = element.getBoundingClientRect().top + window.pageYOffset - 90
            window.scrollTo({top:y, behavior: 'smooth' });
        }
    }
])
</script>

<template>
    <div class="detail-content">
        <About id="about"  />
        <Personal id="personal" />
        <Skill id="skill" />
        <Experience id="experience" v-animate-onscroll="{down: 'animate__animated  animate__slideInLeft'}"/>
        <Contact id="contact" v-animate-onscroll="{down: 'animate__animated  animate__slideInLeft'}"/>
        <div class="speeddial-tooltip-demo" >
        <SpeedDial :model="items" direction="up" style="position: fixed" :transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClass="p-button-outlined" class="speeddial-right"  :tooltipOptions="{position: 'left'}" />
        </div>
    </div>
    
</template>
<style scoped>
.speeddial-tooltip-demo::v-deep(.p-speeddial-direction-up.speeddial-right) {
  right: 20px;
  bottom: 20px;
}
.speeddial-tooltip-demo{
    font-family: "Static", Helvetica, Arial;
}
.detail-content{
    margin: 100px 0;
}
</style>
