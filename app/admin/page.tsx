"use client";

import { useState } from "react";
import { getOrders, updateOrder } from "../lib/storage";
import { PrintOrder } from "../types/order";

export default function AdminPage() {
  const [orders, setOrders] = useState<PrintOrder[]>(() => getOrders());

  function update(o: PrintOrder) {
    updateOrder(o);
    setOrders(getOrders());
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map((o) => (
        <div key={o.id} className="bg-white p-6 rounded-xl shadow mb-4">
          <p><b>Name:</b> {o.name}</p>
          <p><b>File:</b> {o.fileName}</p>
          <p><b>File:</b> {o.address}</p>
          <p><b>File:</b> {o.contact}</p>
          <p><b>File:</b> {o.paperSize}</p>
          <p><b>File:</b> {o.printType}</p>

          <a href={o.fileBase64} download={o.fileName} className="text-red-600 underline">
            Download PDF
          </a>

          <button
            onClick={() => update({ ...o, status: "Completed" })}
            className="btn-primary mt-4"
          >
            Mark Completed
          </button>
        </div>
      ))}
    </div>
  );
}
