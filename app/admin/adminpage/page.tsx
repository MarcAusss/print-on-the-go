"use client";

import { useState } from "react";
import { getOrders, updateOrder } from "../../lib/storage";
import { PrintOrder } from "../../types/order";
import AdminNav from "@/app/components/AdminNav";

export default function AdminPage() {
  const [orders, setOrders] = useState<PrintOrder[]>(() => {
    if (typeof window === "undefined") return [];
    return getOrders();
  });

  function update(o: PrintOrder) {
    updateOrder(o);
    setOrders(getOrders());
  }

  return (
    <>
    <AdminNav/>
      <div className="p-10 mt-16 min-h-screen">
        {orders.length === 0 && <p className="text-gray-500">No orders yet</p>}

        {orders.length > 0 && (
          <div className="overflow-x-auto bg-white rounded-2xl shadow">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100">
                <tr className="text-left text-sm text-gray-600">
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">File</th>
                  <th className="px-6 py-4">Paper</th>
                  <th className="px-6 py-4">Print</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((o) => (
                  <tr
                    key={o.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">
                      <p className="font-medium">{o.name}</p>
                      <p className="text-sm text-gray-500">{o.contact}</p>
                      <p className="text-xs text-gray-400">{o.address}</p>
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-sm">{o.fileName}</p>
                      <a
                        href={o.fileBase64}
                        download={o.fileName}
                        className="text-red-600 text-sm hover:underline"
                      >
                        Download PDF
                      </a>
                    </td>

                    <td className="px-6 py-4 text-sm">{o.paperSize}</td>
                    <td className="px-6 py-4 text-sm">{o.printType}</td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          o.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {o.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-right">
                      {o.status !== "Completed" && (
                        <button
                          onClick={() => update({ ...o, status: "Completed" })}
                          className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-800"
                        >
                          Mark Completed
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
