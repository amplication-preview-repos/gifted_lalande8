import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DealWhereInput = {
  assignedTo?: StringNullableFilter;
  id?: StringFilter;
  manager?: StringNullableFilter;
};
