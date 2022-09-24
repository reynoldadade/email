<template>
  <div>
    <h1>Inbox</h1>
    <h2>Emails Selected({{ appStore.selectedMails.length }})</h2>
    <div class="card">
      <input
        type="checkbox"
        class="item"
        name="selectAll"
        v-model="selectAll"
      />
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
import { onMounted, onUnmounted, Ref, ref, watch } from "@vue/runtime-core";
import Mail from "../components/Mail.vue";
import { Status } from "../models/mail.model";
import { useAppStore } from "../store";

const selectAll: Ref<boolean> = ref(false);
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

watch(
  () => selectAll.value,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      if (newVal === true) {
        appStore.selectedMails = appStore.inbox;
      } else {
        appStore.selectedMails = [];
      }
    }
  }
);
</script>

<style></style>
