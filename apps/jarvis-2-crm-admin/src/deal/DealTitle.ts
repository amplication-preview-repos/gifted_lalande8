import { Deal as TDeal } from "../api/deal/Deal";

export const DEAL_TITLE_FIELD = "assignedTo";

export const DealTitle = (record: TDeal): string => {
  return record.assignedTo?.toString() || String(record.id);
};
