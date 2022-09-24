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
  const selectedMail: Ref<Mail | null> = ref(null);
  const showModal: Ref<boolean> = ref(false);

  function markAsRead() {
    selectedMails.value.forEach((mail) => markSingleAsRead(mail));
    // reset mail
    selectedMails.value = [];
  }

  function markSingleAsRead(payload: Mail | null) {
    if (payload === null) {
      return;
    }
    const index = mails.value.findIndex(
      (object) => object.title === payload.title
    );
    mails.value[index].state = Status.Read;
  }

  function sendSingleToArchive(payload: Mail | null) {
    if (payload === null) {
      return;
    }
    const index = mails.value.findIndex(
      (object) => object.title === payload.title
    );
    mails.value[index].folder = Folder.Archive;
  }
  function sendToArchive() {
    selectedMails.value.forEach((mail) => sendSingleToArchive(mail));
    // reset mail
    selectedMails.value = [];
  }

  function toggleModal() {
    showModal.value = !showModal.value;
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
    sendSingleToArchive,
    markSingleAsRead,
    toggleModal,
    selectedMail,
    showModal,
  };
});
