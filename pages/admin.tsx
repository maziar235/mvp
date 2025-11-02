// pages/admin.js (or pages/admin/index.js)

import dynamic from "next/dynamic";
import React from "react";
import Layout from "../components/Layout";
import { useAuth } from "../hooks/useAuth";

// Dynamically import AdminOnly to prevent SSR issues
const AdminOnly = dynamic(() => import("../components/AdminOnly"), {
  ssr: false,
  loading: () => <p>Loading admin interface...</p>,
});

// Disable static generation — optional if AdminOnly already handles auth
export const getServerSideProps = () => {
  return {
    props: {},
  };
};

function AdminContent() {
  const { user } = useAuth();

  return (
    <Layout 
      userName={user?.name || "Admin"} 
      notificationsCount={5}
      showHeader={true}
    >
      <div className="admin-container">
        <h1>Admin Panel</h1>
        <p>Welcome, admin! Here you can manage users and view analytics.</p>
        {/* Your admin content */}
      </div>
    </Layout>
  );
}

export default function AdminPage() {
  return (
    <AdminOnly>
      <AdminContent />
    </AdminOnly>
  );
}
