import React from "react"
import Link from "next/link"
import { Gauge, Package, ShoppingCart, Users, Settings, LogOut } from "lucide-react"

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  href: string
  active?: boolean
}

const SidebarItem = ({ icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link href={href} className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors ${active ? "bg-secondary text-secondary-foreground" : "hover:bg-secondary/50"}`}>
      <div className="mr-3">{icon}</div>
      <span>{label}</span>
    </Link>
  )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-background border-r p-4">
        <div className="flex items-center mb-8 px-4">
          <h1 className="text-lg font-bold">Perfume ERP</h1>
        </div>

        <div className="space-y-1">
          <SidebarItem icon={<Gauge size={20} />} label="Dashboard" href="/dashboard" active />
          <SidebarItem icon={<Package size={20} />} label="Products" href="/products" />
          <SidebarItem icon={<ShoppingCart size={20} />} label="Orders" href="/orders" />
          <SidebarItem icon={<Users size={20} />} label="Customers" href="/customers" />
          <SidebarItem icon={<Settings size={20} />} label="Settings" href="/settings" />
        </div>

        <div className="absolute bottom-4 w-52">
          <SidebarItem icon={<LogOut size={20} />} label="Logout" href="/logout" />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Top navigation */}
        <header className="h-16 border-b px-6 flex items-center justify-between">
          <div className="text-xl font-medium">Dashboard</div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">A</div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
