import { SortOrder } from "../../util/SortOrder";

export type DealOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  manager?: SortOrder;
  updatedAt?: SortOrder;
};
