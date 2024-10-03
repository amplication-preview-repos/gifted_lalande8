import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactWhereInput = {
  assignedTo?: StringNullableFilter;
  id?: StringFilter;
  manager?: StringNullableFilter;
};
