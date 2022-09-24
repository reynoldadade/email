<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div class="container">
    <SideBar />
    <div class="container__main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
