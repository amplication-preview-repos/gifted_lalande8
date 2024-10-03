import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type QuoteWhereInput = {
  assignedTo?: StringNullableFilter;
  id?: StringFilter;
  manager?: StringNullableFilter;
};
