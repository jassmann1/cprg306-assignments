"use client";
import { useUserAuth } from "./_utils/auth-context";

console.log("useUserAuth:", useUserAuth);

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut, loading } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/week-10/shopping-list");
    }
  }, [user, router]);

  if (loading) return <p className="text-center text-xl">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <h1 className="text-3xl font-bold mb-4">Shopping List App</h1>
      {user ? (
        <>
          <p className="text-xl mb-4">Signed in as {user.email}</p>
          <button
            onClick={firebaseSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600"
          >
            Sign out
          </button>
          <Link
            href="/week-10/shopping-list"
            className="text-blue-400 mt-4 hover:text-blue-500"
          >
            Continue to your Shopping List
          </Link>
        </>
      ) : (
        <button
          onClick={gitHubSignIn}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login with GitHub
        </button>
      )}
    </div>
  );
}
