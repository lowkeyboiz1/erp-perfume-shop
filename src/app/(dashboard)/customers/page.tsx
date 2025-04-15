import Link from "next/link"
import { Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"

interface CustomerData {
  id: string
  name: string
  email: string
  totalSpent: number
  orders: number
  status: "Active" | "Inactive"
  joinDate: string
}

const customers: CustomerData[] = [
  {
    id: "CUS-1001",
    name: "John Smith",
    email: "john.smith@example.com",
    totalSpent: 459.97,
    orders: 5,
    status: "Active",
    joinDate: "2023-01-15",
  },
  {
    id: "CUS-1002",
    name: "Mary Johnson",
    email: "mary.johnson@example.com",
    totalSpent: 289.98,
    orders: 3,
    status: "Active",
    joinDate: "2023-02-20",
  },
  {
    id: "CUS-1003",
    name: "Robert Brown",
    email: "robert.brown@example.com",
    totalSpent: 145.99,
    orders: 2,
    status: "Active",
    joinDate: "2023-03-05",
  },
  {
    id: "CUS-1004",
    name: "Patricia Davis",
    email: "patricia.davis@example.com",
    totalSpent: 99.99,
    orders: 1,
    status: "Inactive",
    joinDate: "2023-04-10",
  },
  {
    id: "CUS-1005",
    name: "Jennifer Miller",
    email: "jennifer.miller@example.com",
    totalSpent: 769.95,
    orders: 8,
    status: "Active",
    joinDate: "2023-01-05",
  },
  {
    id: "CUS-1006",
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    totalSpent: 0,
    orders: 0,
    status: "Inactive",
    joinDate: "2023-05-01",
  },
]

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
          <p className="text-muted-foreground">Manage your customer database</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <div className="rounded-lg border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2 border rounded-md px-3 py-2 w-72">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Search customers..." className="flex-1 bg-transparent border-none outline-none text-sm" />
          </div>
          <div className="flex items-center gap-2">
            <select className="rounded-md border px-3 py-2 text-sm bg-transparent">
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="border-t">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Customer ID</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Name</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Email</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Total Spent</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Orders</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Status</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Join Date</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b transition-colors hover:bg-muted/50">
                  <td className="p-4 text-sm">{customer.id}</td>
                  <td className="p-4 text-sm font-medium">{customer.name}</td>
                  <td className="p-4 text-sm">{customer.email}</td>
                  <td className="p-4 text-sm">${customer.totalSpent.toFixed(2)}</td>
                  <td className="p-4 text-sm">{customer.orders}</td>
                  <td className="p-4 text-sm">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        customer.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm">{customer.joinDate}</td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Link href={`/customers/${customer.id}`} className="text-blue-600 hover:underline text-xs">
                        View
                      </Link>
                      <span>|</span>
                      <Link href={`/customers/${customer.id}/edit`} className="text-blue-600 hover:underline text-xs">
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
