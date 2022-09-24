<template>
  <div class="modal">
    <div class="modal__mail-viewer">
      <div @click="appStore.toggleModal" role="button">Close(esc)</div>
      <div class="card">
        <button
          class="item"
          @click="appStore.markSingleAsRead(appStore.selectedMail)"
        >
          Mark as read(r)
        </button>
        <button
          class="item"
          @click="appStore.sendSingleToArchive(appStore.selectedMail)"
        >
          Archive(r)
        </button>
      </div>

      <h1>{{ appStore.selectedMail?.title }}</h1>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        minima, placeat corporis amet consequuntur corrupti repellendus.
        Repudiandae saepe praesentium voluptatem sequi est dolorem nostrum
        itaque molestiae neque? Error, vero et?
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "../store";

const appStore = useAppStore();
</script>

<style></style>
