<template>
  <div class="card">
    <input
      type="checkbox"
      class="item"
      v-model="appStore.selectedMails"
      :value="mail"
      :name="mail.title"
    />
    <span @click="selectMail(mail)">{{ mail.title }}</span>
  </div>
</template>

<script setup lang="ts">
import { Mail } from "../models/mail.model";
import { useAppStore } from "../store";
import { Mail as MailInterface } from "../models/mail.model";

const appStore = useAppStore();
const props = defineProps<{
  mail: Mail;
}>();

function selectMail(mail: MailInterface) {
  appStore.selectedMail = mail;
  appStore.toggleModal();
}
</script>

<style></style>
