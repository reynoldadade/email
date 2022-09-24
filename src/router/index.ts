import InboxView from "../views/Inbox.vue";
import ArchiveView from "../views/Archive.vue";
const routes = [
  {
    path: "/",
    component: InboxView,
    name: "inbox",
  },
  {
    path: "/archive",
    component: ArchiveView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

export default routes;
