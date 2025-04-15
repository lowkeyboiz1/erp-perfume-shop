import { BarChart, DollarSign, Package, ShoppingCart, Users } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
}

const StatCard = ({ title, value, description, icon }: StatCardProps) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <div className="h-14 w-14 rounded-lg bg-secondary flex items-center justify-center">{icon}</div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Overview of your perfume shop performance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Revenue" value="$45,231.89" description="+20.1% from last month" icon={<DollarSign className="h-8 w-8" />} />
        <StatCard title="Orders" value="356" description="+12% from last month" icon={<ShoppingCart className="h-8 w-8" />} />
        <StatCard title="Products" value="145" description="12 added this month" icon={<Package className="h-8 w-8" />} />
        <StatCard title="Customers" value="2,420" description="+5.65% from last month" icon={<Users className="h-8 w-8" />} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Sales Overview</h3>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="p-6 pt-0 h-[300px] flex items-center justify-center text-muted-foreground">Sales chart will be displayed here</div>
        </div>
        <div className="col-span-3 rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Recent Orders</h3>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Order #{1000 + i}</p>
                    <p className="text-xs text-muted-foreground">Customer #{2000 + i}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-medium">${(Math.random() * 100).toFixed(2)}</div>
                    <div className="rounded-full px-2 py-1 text-xs bg-green-100 text-green-800">Completed</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
