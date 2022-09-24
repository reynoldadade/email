<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import Modal from "./components/modal.vue";
import { useAppStore } from "./store";

const appStore = useAppStore();
</script>

<template>
  <div class="container">
    <Modal v-if="appStore.showModal" />
    <SideBar />
    <div class="container__main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
