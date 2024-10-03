import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "assignedTo";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.assignedTo?.toString() || String(record.id);
};
