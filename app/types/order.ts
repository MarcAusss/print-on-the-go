export type PaperSize = "A4" | "Letter" | "Legal";
export type PrintType = "Colored" | "Black & White";
export type DeliveryType = "Pickup" | "Deliver";
export type PaymentStatus = "Paid" | "Unpaid";
export type OrderStatus = "Pending" | "Completed";

export interface PrintOrder {
  id: string;
  fileName: string;
  fileBase64: string;

  name: string;
  address: string;
  contact: string;
  paperSize: string;
  printType: string;
  deliveryType: "Pickup" | "Deliver";

  status: "Pending" | "Completed";
  paymentStatus: "Paid" | "Unpaid";
  price?: number;

  createdAt: string;
}

