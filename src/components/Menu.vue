<script setup>
import { ref } from 'vue';

const items = ref([
  {
    label:'Home',
    icon:'pi pi-fw pi-home',
    to:'/'
  },
  {
    label:'About',
    icon:'pi pi-fw pi-info-circle',
    to:'/about'
  }
])
</script>

<template>
  <div>
    <Menu :model="items" />
  </div>
</template>

<style scoped>

</style>