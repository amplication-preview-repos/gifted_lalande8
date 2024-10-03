import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  manager?: SortOrder;
  updatedAt?: SortOrder;
};
