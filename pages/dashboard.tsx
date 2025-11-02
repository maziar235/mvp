// pages/dashboard.tsx
import React from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Layout from "../components/Layout";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    try {
      // Clear server-side session (cookie)
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      router.push("/login");
    }
  }, [router]);

  return (
    <Layout
      userName={user?.name || "User"}
      notificationsCount={3}
      showHeader={true}
    >
      <div className="dashboard-container max-w-xl mx-auto mt-10 text-center">
        <h1 data-testid="user-greeting" className="text-3xl font-bold mb-4">
          🎉 Welcome to your dashboard!
        </h1>
        <p className="text-gray-600 mb-6">
          You are now logged in as {user?.email || "a user"}.
        </p>

        <button
          data-testid="logout-button"
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
    </Layout>
  );
}
