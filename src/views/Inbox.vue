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
        @click="selectMail(inbox)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "@vue/runtime-core";
import Mail from "../components/Mail.vue";
import { Status } from "../models/mail.model";
import { useAppStore } from "../store";
import { Mail as MailInterface } from "../models/mail.model";

const appStore = useAppStore();

onMounted(() => {
  window.addEventListener("keydown", shortcutListener);
});

onUnmounted(() => {
  window.removeEventListener("keydown", shortcutListener);
});

function shortcutListener(event: KeyboardEvent) {
  if (event.key.toLowerCase() === "r") {
    appStore.markAsRead();
  }
  if (event.key.toLowerCase() === "a") {
    appStore.sendToArchive();
  }
  if (event.key.toLowerCase() === "escape") {
    appStore.toggleModal();
  }
}

function selectMail(mail: MailInterface) {
  appStore.selectedMail = mail;
  appStore.toggleModal();
}
</script>

<style></style>
