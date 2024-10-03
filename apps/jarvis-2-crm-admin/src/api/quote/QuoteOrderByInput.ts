import { SortOrder } from "../../util/SortOrder";

export type QuoteOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  manager?: SortOrder;
  updatedAt?: SortOrder;
};
