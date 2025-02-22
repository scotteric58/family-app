// components/Layout.tsx

import { signOut } from "next-auth/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 text-white flex justify-between">
        <h2>Family Hub</h2>
        <button onClick={() => signOut()}>Sign Out</button>
      </header>
      <main className="p-4">
        {children}
      </main>
    </div>
  );
}
