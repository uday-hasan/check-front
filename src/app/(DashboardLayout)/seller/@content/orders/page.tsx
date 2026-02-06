"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface OrderItem {
  id: string;
  medicine: {
    id: string;
    name: string;
  };
  quantity: number;
}

interface Order {
  id: string;
  status: string;
  customer: {
    name: string;
    email: string;
  };
  items: OrderItem[];
  total: number;
  createdAt: string;
}

const IncomingOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/seller`,
        { credentials: "include" },
      );
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (
    orderId: string,
    status: "PENDING" | "COMPLETED" | "CANCELLED",
  ) => {
    try {
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status } : o)),
      );

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/status`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ orderId, status }),
        },
      );

      if (!res.ok) throw new Error("Failed to update status");

      const updated = await res.json();

      setOrders((prev) =>
        prev.map((o) => (o.id === updated.id ? { ...o, ...updated } : o)),
      );

      toast.success("Order status updated");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No incoming orders yet.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 space-y-6 ">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          Incoming Orders
        </h1>

        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow rounded-xl p-6 space-y-4 mb-6"
          >
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold">
                  Order ID: <span className="text-gray-600">{order.id}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Customer: {order.customer.name} ({order.customer.email})
                </p>
              </div>

              <select
                className="select select-bordered select-sm"
                value={order.status}
                onChange={(e) =>
                  handleStatusChange(
                    order.id,
                    e.target.value as "PENDING" | "COMPLETED" | "CANCELLED",
                  )
                }
              >
                <option value="PENDING">Pending</option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>

            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.medicine.name}</span>
                  <span>Qty: {item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>৳{order.total.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomingOrders;
