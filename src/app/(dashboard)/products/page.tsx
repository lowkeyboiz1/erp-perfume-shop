import Link from "next/link"
import { Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ProductData {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: "In Stock" | "Low Stock" | "Out of Stock"
}

const products: ProductData[] = [
  {
    id: "PRD001",
    name: "Floral Essence",
    category: "Women",
    price: 89.99,
    stock: 45,
    status: "In Stock",
  },
  {
    id: "PRD002",
    name: "Ocean Breeze",
    category: "Men",
    price: 79.99,
    stock: 32,
    status: "In Stock",
  },
  {
    id: "PRD003",
    name: "Citrus Fresh",
    category: "Unisex",
    price: 69.99,
    stock: 8,
    status: "Low Stock",
  },
  {
    id: "PRD004",
    name: "Midnight Dream",
    category: "Women",
    price: 99.99,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "PRD005",
    name: "Wooden Accord",
    category: "Men",
    price: 84.99,
    stock: 21,
    status: "In Stock",
  },
  {
    id: "PRD006",
    name: "Summer Vibes",
    category: "Unisex",
    price: 74.99,
    stock: 5,
    status: "Low Stock",
  },
]

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">Manage your perfume inventory</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="rounded-lg border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2 border rounded-md px-3 py-2 w-72">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Search products..." className="flex-1 bg-transparent border-none outline-none text-sm" />
          </div>
          <div className="flex items-center gap-2">
            <select className="rounded-md border px-3 py-2 text-sm bg-transparent">
              <option value="">All Categories</option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Unisex">Unisex</option>
            </select>
            <select className="rounded-md border px-3 py-2 text-sm bg-transparent">
              <option value="">All Status</option>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        <div className="border-t">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Product ID</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Name</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Category</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Price</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Stock</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Status</th>
                <th className="h-12 px-4 text-left text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b transition-colors hover:bg-muted/50">
                  <td className="p-4 text-sm">{product.id}</td>
                  <td className="p-4 text-sm font-medium">{product.name}</td>
                  <td className="p-4 text-sm">{product.category}</td>
                  <td className="p-4 text-sm">${product.price.toFixed(2)}</td>
                  <td className="p-4 text-sm">{product.stock}</td>
                  <td className="p-4 text-sm">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        product.status === "In Stock" ? "bg-green-100 text-green-800" : product.status === "Low Stock" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline text-xs">
                        View
                      </Link>
                      <span>|</span>
                      <Link href={`/products/${product.id}/edit`} className="text-blue-600 hover:underline text-xs">
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
