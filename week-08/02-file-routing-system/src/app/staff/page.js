// this is the staff page
// this is the route "/staff"
import Link from "next/link";

export default function StaffPage() {
  return (
    <>
      <h1>This is the staff page</h1>;
      <ol>
        <Link href={"/staff/ross"}>Ross</Link>
        <Link href={"/staff/rosdy"}>Rosdy</Link>
        <Link href={"/staff/rosdykat"}>Rosdykat</Link>
      </ol>
    </>
  );
}
