// app/page.js
import Link from "next/link";

const RootPage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Go to Week 2 Assignment</Link>
      </p>
      <p>
        Additional information: The Guide: Coding Workflow may help you with the
        coding workflow.
      </p>
    </div>
  );
};

export default RootPage;
