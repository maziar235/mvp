import dynamic from "next/dynamic";

// Dynamically import the client-side DietForm component (SSR disabled)
const DietFormClient = dynamic(() => import('../components/DietFormClient'), {
  ssr: false,
  loading: () => <p>Loading diet form...</p>,
});

// Disable static generation — this page will be server-rendered on every request
export const getServerSideProps = () => {
  return {
    props: {},
  };
};

// Main page component
export default function DietForm() {
  return <DietFormClient />;
}
