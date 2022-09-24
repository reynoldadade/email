<template>
  <div>
    <h1>Archive</h1>

    <div>
      <Mail
        v-for="inbox in appStore.archive"
        :key="inbox.title"
        :mail="inbox"
        :class="inbox.state === Status.Unread ? 'card__default' : 'card__read'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Mail from "../components/Mail.vue";
import { Status } from "../models/mail.model";
import { useAppStore } from "../store";

const appStore = useAppStore();
</script>

<style></style>
