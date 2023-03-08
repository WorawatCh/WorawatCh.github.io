<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from 'primevue/breadcrumb';
import { ref } from 'vue';

const home = ref({
            icon: 'pi pi-home',
            to: '/',
        });
        const items = ref([
            {label: 'Computer'},
            {label: 'Notebook'},
            {label: 'Accessories'},
            {label: 'Backpacks'},
            {label: 'Item'}
        ]);
</script>

<template>
  <!-- <div> -->
    <Breadcrumb :home="home" :model="items" aria-label="breadcrumb" />
  <!-- </div> -->
</template>

<style scoped>
</style>
