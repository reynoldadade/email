<script lang="ts" setup>
import { useAppStore } from "../store";
const appStore = useAppStore();
</script>

<template>
  <div class="container__sideBar">
    <div class="links">
      <router-link to="/">Inbox({{ appStore.inbox.length }})</router-link>
      <router-link to="/archive"
        >Archive({{ appStore.archive.length }})</router-link
      >
    </div>
    <div class="links">
      <router-link to="/">Logout</router-link>
    </div>
  </div>
</template>
