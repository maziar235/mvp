import React from "react";
import Layout from "./Layout";
import { useAuth } from "../hooks/useAuth";

export default function AdminContent() {
  const { user } = useAuth();

  // Optional: show loading or redirect if user not loaded yet
  if (!user) {
    return <p>Access denied or loading...</p>;
  }

  return (
    <Layout
      userName={user.name || "Admin"}
      notificationsCount={5}
      showHeader={true}
    >
      <div className="admin-container">
        <h1>Admin Panel</h1>
        <p>Welcome, admin! Here you can manage users and view analytics.</p>
        {/* Add your admin features here */}
      </div>
    </Layout>
  );
}
