import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InvoiceWhereInput = {
  assignedTo?: StringNullableFilter;
  id?: StringFilter;
  manager?: StringNullableFilter;
};
