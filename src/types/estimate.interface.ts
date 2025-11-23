export type serviceType = "print" | "design" | null;

export type material = "pla" | "petg" | "abs" | "tpu";

export type contact = {
  name: string;
  email: string;
  phone: string | null;
};

export interface EstimateData {
  serviceType: serviceType;
  material: material;
  description: string;
  files: File[] | null;
  contact: contact;
  quantity: number;
}
