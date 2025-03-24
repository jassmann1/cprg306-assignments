"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function HomePage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={firebaseSignOut}>Logout</button>
          <Link href="/week-9/shopping-list">Go to Shopping List</Link>
        </>
      ) : (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      )}
    </div>
  );
}
