import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Assignments</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link href="/week-1" className="text-blue-500 hover:underline">
            Week 1 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-2" className="text-blue-500 hover:underline">
            Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-3" className="text-blue-500 hover:underline">
            Week 3 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-4" className="text-blue-500 hover:underline">
            Week 4 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-5" className="text-blue-500 hover:underline">
            Week 5 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-6" className="text-blue-500 hover:underline">
            Week 6 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-7" className="text-blue-500 hover:underline">
            Week 7 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
