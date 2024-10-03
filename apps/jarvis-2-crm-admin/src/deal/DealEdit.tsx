import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DealEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="assignedTo" source="assignedTo" />
        <TextInput label="Manager" source="manager" />
      </SimpleForm>
    </Edit>
  );
};
