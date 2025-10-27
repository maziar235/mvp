import dynamic from "next/dynamic";
import React from "react";
import Layout from "../components/Layout";
import { useAuth } from "../hooks/useAuth";

// Dynamically import the client-side form with SSR disabled
const DietFormClient = dynamic(() => import('../components/DietFormClient'), {
  ssr: false,
  loading: () => <p>Loading diet form...</p>,
});

// Ensure this page is server-rendered so auth context is available
export const getServerSideProps = () => {
  return {
    props: {},
  };
};

export default function DietForm() {
  const { user } = useAuth();

  return (
    <Layout
      userName={user?.name || "User"}
      notificationsCount={2}
      showHeader={true}
    >
      <div className="diet-form-container">
        <h1>Diet Preferences</h1>
        <DietFormClient />
      </div>
    </Layout>
  );
}
