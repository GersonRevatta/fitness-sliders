<script setup>
import '@/assets/main.css';
import {RouterView} from "vue-router";
import DynamicDialog from "primevue/dynamicdialog";
import ConfirmDialog from "primevue/confirmdialog";
</script>

<template>
  <ConfirmDialog/>
  <RouterView/>
</template>
