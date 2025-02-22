// pages/dashboard/index.tsx

import { useSession, signIn } from "next-auth/react";
import Layout from "../../components/Layout";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div>
        <p>You must be signed in to view the dashboard.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <Layout>
      <h1>Family Dashboard</h1>
      <p>Welcome, {session.user?.name}!</p>
      {/* Navigation for future modules */}
      <nav>
        <ul>
          <li><a href="/dashboard/calendar">Family Calendar</a></li>
          <li><a href="/dashboard/recipes">Recipes</a></li>
        </ul>
      </nav>
    </Layout>
  );
}
