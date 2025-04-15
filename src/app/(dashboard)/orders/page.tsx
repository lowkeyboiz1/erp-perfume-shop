import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"

interface OrderData {
  id: string
  customer: string
  date: string
  total: number
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Canceled"
  payment: "Paid" | "Unpaid" | "Refunded"
}

const orders: OrderData[] = [
  {
    id: "ORD-5623",
    customer: "John Smith",
    date: "2023-11-15",
    total: 145.99,
    status: "Delivered",
    payment: "Paid",
  },
  {
    id: "ORD-5624",
    customer: "Mary Johnson",
    date: "2023-11-16",
    total: 89.99,
    status: "Shipped",
    payment: "Paid",
  },
  {
    id: "ORD-5625",
    customer: "Robert Brown",
    date: "2023-11-16",
    total: 245.98,
    status: "Processing",
    payment: "Paid",
  },
  {
    id: "ORD-5626",
    customer: "Patricia Davis",
    date: "2023-11-17",
    total: 69.99,
    status: "Pending",
    payment: "Unpaid",
  },
  {
    id: "ORD-5627",
    customer: "Jennifer Miller",
    date: "2023-11-17",
    total: 189.97,
    status: "Canceled",
    payment: "Refunded",
  },
  {
    id: "ORD-5628",
    customer: "Michael Wilson",
    date: "2023-11-18",
    total: 129.99,
    status: "Processing",
    payment: "Paid",
  },
]

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
        <p className="text-muted-foreground">Manage customer orders and shipments</p>
      </div>

      <div className="rounded-lg border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2 border rounded-md px-3 py-2 w-72">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Search orders..." className="flex-1 bg-transparent border-none outline-none text-sm" />
          </div>
          <div className="flex items-center gap-2">
            <select className="rounded-md border px-3 py-2 text-sm bg-transparent">
              <option value="">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Canceled">Canceled</option>
            </select>
            <select className="rounded-md border px-3 py-2 text-sm bg-transparent">
              <option value="">All Payment</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
              <option value="Refunded">Refunded</option>
            </select>
          </div>
        </div>

        <div className="border-t">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Order ID</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Customer</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Date</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Total</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Status</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Payment</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b transition-colors hover:bg-muted/50">
                  <td className="p-4 text-sm">{order.id}</td>
                  <td className="p-4 text-sm">{order.customer}</td>
                  <td className="p-4 text-sm">{order.date}</td>
                  <td className="p-4 text-sm">${order.total.toFixed(2)}</td>
                  <td className="p-4 text-sm">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-800"
                          : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "Pending"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        order.payment === "Paid" ? "bg-green-100 text-green-800" : order.payment === "Unpaid" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.payment}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Link href={`/orders/${order.id}`} className="text-blue-600 hover:underline text-xs">
                        View
                      </Link>
                      <span>|</span>
                      <Link href={`/orders/${order.id}/edit`} className="text-blue-600 hover:underline text-xs">
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 flex items-center justify-between border-t">
          <div className="text-sm text-muted-foreground">
            Showing <strong>1</strong> to <strong>6</strong> of <strong>6</strong> results
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
