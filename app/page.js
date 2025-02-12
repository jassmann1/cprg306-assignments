import Link from "next/link";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Assignments</h1>
      <ul className="list-disc pl-5">
        <li>
          <Link href="/week-3">Week 3 Assignment</Link>
        </li>
        <li>
          <Link href="/week-4">Week 4 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}
