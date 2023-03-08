<script setup>
import { ref } from 'vue';
import About from '../components/About.vue'
import Skill from '../components/Skill.vue'
import Personal from '../components/Personal.vue'
import SpeedDial from 'primevue/speeddial';

const items = ref( [
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            this.$router.push('fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
</script>

<template>
    <!-- <div class="speeddial-tooltip-demo" > -->
      <About />
      <Personal />
      <Skill />
      <!-- <SpeedDial :model="items" direction="up"  :transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClass="p-button-outlined" class="speeddial-right"  :tooltipOptions="{position: 'left'}" /> -->
    <!-- </div> -->
</template>
<style scoped>
.speeddial-tooltip-demo::v-deep(.p-speeddial-direction-up.speeddial-right) {
  right: 20px;
  bottom: 0;
}
.speeddial-tooltip-demo{
  position: relative; 
  height: calc(100vh - 100px);
}
</style>
