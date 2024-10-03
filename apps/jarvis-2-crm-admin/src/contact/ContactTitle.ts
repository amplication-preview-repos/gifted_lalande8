import { Contact as TContact } from "../api/contact/Contact";

export const CONTACT_TITLE_FIELD = "assignedTo";

export const ContactTitle = (record: TContact): string => {
  return record.assignedTo?.toString() || String(record.id);
};
