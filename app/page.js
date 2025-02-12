// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        Go to the
        <Link href="/week-2">Week 2 page</Link>
        to see the Shopping List.
      </p>
    </main>
  );
}
