import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  manager?: SortOrder;
  updatedAt?: SortOrder;
};
