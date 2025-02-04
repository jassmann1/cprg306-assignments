import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Assignments</h1>
      <ul className="list-disc list-inside space-y-4 text-lg">
        <li>
          <Link href="/week-3" className="text-blue-600 hover:underline">
            Week 3 - Shopping List
          </Link>
        </li>
        {/* Add links to other weeks if necessary */}
      </ul>
    </main>
  );
}
