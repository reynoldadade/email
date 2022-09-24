export interface Mail {
  folder: Folder;
  state: Status;
  title: string;
}

export enum Status {
  Read = "read",
  Unread = "unread",
}

export enum Folder {
  Inbox = "inbox",
  Archive = "archive",
}
