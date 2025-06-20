import Link from "next/link";

export default function NavPage() {
  return (
    <>
      <Link href={`/`}>
        <h1>Home</h1>
      </Link>
      <Link href={`/`}>
        <h1>About</h1>
      </Link>
    </>
  );
}
