// week-2/student-info.js
import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>My name is Jaspreet kaur</p>
      <p>
        Check out my GitHub repository:
        <Link href="https://github.com/jassmann1" target="_blank">
          My GitHub
        </Link>
      </p>
    </div>
  );
}
