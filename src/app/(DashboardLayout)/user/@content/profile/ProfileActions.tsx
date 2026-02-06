"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ProfileActions = ({ user }: any) => {
  const router = useRouter();

  const [name, setName] = useState(user.name || "");
  const [loading, setLoading] = useState(false);

  // UPDATE PROFILE
  const handleUpdate = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/me`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ name}),
        }
      );

      if (!res.ok) throw new Error();

      toast.success("Profile updated");
      router.refresh();
    } catch {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  // DELETE ACCOUNT
  const handleDelete = async () => {
    const confirmed = confirm(
      "This will permanently delete your account. Continue?"
    );
    if (!confirmed) return;

    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/me`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      toast.success("Account deleted");
      router.push("/login");
      router.refresh();
    } catch {
      toast.error("Failed to delete account");
    }
  };

  return (
    <div className="mt-8 space-y-6">
      {/* EDIT FORM */}
      <div className="bg-white border rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">Edit Profile</h2>

        <input
          className="input input-bordered w-full"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleUpdate}
          disabled={loading}
          className="btn btn-primary"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>

      {/* DANGER ZONE */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-red-600 mb-2">
          Danger Zone
        </h2>
        <p className="text-sm text-red-500 mb-4">
          Deleting your account is permanent and cannot be undone.
        </p>
        <button
          onClick={handleDelete}
          className="btn btn-error btn-outline"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default ProfileActions;
