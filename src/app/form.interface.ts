export type EmploymentStatus = "unemployed" | "full-time" | "part-time";
export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  gender: string;
  employment: EmploymentStatus;
}
