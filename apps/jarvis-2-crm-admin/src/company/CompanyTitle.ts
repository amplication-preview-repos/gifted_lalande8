import { Company as TCompany } from "../api/company/Company";

export const COMPANY_TITLE_FIELD = "assignedTo";

export const CompanyTitle = (record: TCompany): string => {
  return record.assignedTo?.toString() || String(record.id);
};
