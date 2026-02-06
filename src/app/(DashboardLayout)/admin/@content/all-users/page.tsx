"use client";

import { useEffect, useState } from "react";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
}
const AdminUsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchUsers = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user`,
      {
        credentials: "include", 
      }
    );
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };
    fetchUsers();
  }, []);

  const toggleBan = async (userId: string, status: string) => {
  const newStatus = status === "active" ? "banned" : "active";

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/ban/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ status: newStatus }),
  });

  
  setUsers((prev) =>
    prev.map((user) =>
      user.id === userId ? { ...user, status: newStatus } : user
    )
  );
};


  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-blue-500">
        Manage Users
      </h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td
                  className={
                    user.status === "active"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {user.status}
                </td>
                <td className="text-center ">
                  <button
                    onClick={() => toggleBan(user.id, user.status)}
                    className={`px-3 py-1 rounded cursor-pointer ${
                      user.status === "active"
                        ? "text-red-500"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {user.status === "active" ? "Ban" : "Unban"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsersPage;
