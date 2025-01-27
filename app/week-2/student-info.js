// student-info.js
import Link from "next/link";

const StudentInfo = () => {
  return (
    <div>
      <h1>Student Information</h1>
      <p>Name: Jaspreet kaur</p>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/jassmann1" passHref>
          jassmann1's GitHub
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
