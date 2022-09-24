<template>
  <div>
    <h1>Inbox</h1>
    <h2>Emails Selected({{ appStore.selectedMails.length }})</h2>
    <div class="card">
      <input type="checkbox" class="item" />
      <button class="item" @click="appStore.markAsRead">Mark as read(r)</button>
      <button class="item" @click="appStore.sendToArchive">Archive(r)</button>
    </div>

    <div>
      <Mail
        v-for="inbox in appStore.inbox"
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
