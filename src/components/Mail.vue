<template>
  <div class="card">
    <input
      type="checkbox"
      class="item"
      v-model="appStore.selectedMails"
      :value="mail"
      :name="mail.title"
    />
    <span>{{ mail.title }}</span>
  </div>
</template>

<script setup lang="ts">
import { Mail } from "../models/mail.model";
import { useAppStore } from "../store";

const appStore = useAppStore();
const props = defineProps<{
  mail: Mail;
}>();
</script>

<style></style>
