import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DealCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="assignedTo" source="assignedTo" />
        <TextInput label="Manager" source="manager" />
      </SimpleForm>
    </Create>
  );
};
