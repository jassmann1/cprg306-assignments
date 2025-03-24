"use client";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

export default function ShoppingList() {
  const { user } = useUserAuth();
  const router = useRouter();

  if (!user) {
    router.push("/week-9");
    return null;
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <p>Protected content visible only to logged-in users.</p>
    </div>
  );
}
