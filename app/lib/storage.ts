import { PrintOrder } from "../types/order";

const KEY = "print-orders";

export function getOrders(): PrintOrder[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

export function saveOrder(order: PrintOrder) {
  const orders = getOrders();
  localStorage.setItem(KEY, JSON.stringify([...orders, order]));
}

export function updateOrder(updated: PrintOrder) {
  const orders = getOrders().map((o) =>
    o.id === updated.id ? updated : o
  );
  localStorage.setItem(KEY, JSON.stringify(orders));
}
