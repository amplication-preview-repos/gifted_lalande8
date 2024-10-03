import { Quote as TQuote } from "../api/quote/Quote";

export const QUOTE_TITLE_FIELD = "assignedTo";

export const QuoteTitle = (record: TQuote): string => {
  return record.assignedTo?.toString() || String(record.id);
};
