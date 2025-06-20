import Link from "next/link";

export default function Nav() {
  return (
    <>
      <h1>Navigation bar</h1>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/staff"}>Staff</Link>
      </nav>
    </>
  );
}
