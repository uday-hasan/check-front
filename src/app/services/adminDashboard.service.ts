

export interface DashboardStats {
  totalUsers: number;
  totalMedicines: number;
  totalOrders: number;
  totalCategories: number;
}

export const fetchDashboardStats = async (): Promise<DashboardStats> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adminDashboard-stats`, {
    credentials: "include",
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard stats");
  }

  const data = await res.json();
  return {
    totalUsers: data.totalUsers || 0,
    totalMedicines: data.totalMedicines || 0,
    totalOrders: data.totalOrders || 0,
    totalCategories: data.totalCategories || 0,
  };
};
