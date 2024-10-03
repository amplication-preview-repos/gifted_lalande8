import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompanyWhereInput = {
  assignedTo?: StringNullableFilter;
  id?: StringFilter;
  manager?: StringNullableFilter;
};
