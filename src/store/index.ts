import { defineStore } from "pinia";
import { computed, ComputedRef, Ref, ref } from "vue";
import { Mail, Status, Folder } from "../models/mail.model";

export const useAppStore = defineStore("main", () => {
  const mails: Ref<Mail[]> = ref([
    {
      title: "Your 7 figure Plan goes byebye at midnight",
      state: Status.Unread,
      folder: Folder.Inbox,
    },
    {
      title: "[Weekend Only] get this NOW before",
      state: Status.Unread,
      folder: Folder.Inbox,
    },
    {
      title: "Uh Oh your prescription is expiring",
      state: Status.Unread,
      folder: Folder.Inbox,
    },
  ]);

  const selectedMails: Ref<Mail[]> = ref([]);

  function markAsRead() {
    selectedMails.value.forEach((mail) => {
      const index = mails.value.findIndex(
        (object) => object.title === mail.title
      );
      mails.value[index].state = Status.Read;
    });
    // reset mail
    selectedMails.value = [];
  }
  function sendToArchive() {
    selectedMails.value.forEach((mail) => {
      const index = mails.value.findIndex(
        (object) => object.title === mail.title
      );
      mails.value[index].folder = Folder.Archive;
    });
    // reset mail
    selectedMails.value = [];
  }

  // inbox mails
  const inbox: ComputedRef<Mail[]> = computed(() =>
    mails.value.filter((mail) => mail.folder === Folder.Inbox)
  );
  const archive: ComputedRef<Mail[]> = computed(() =>
    mails.value.filter((mail) => mail.folder === Folder.Archive)
  );

  return {
    markAsRead,
    inbox,
    archive,
    selectedMails,
    sendToArchive,
  };
});
