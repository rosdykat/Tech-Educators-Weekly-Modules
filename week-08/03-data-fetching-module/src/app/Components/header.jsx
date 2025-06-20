import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>This is the Header!</h1>
      <Link href={"/posts"}>Posts Page</Link>
      <br></br>
      <Link href={"/"}>Home Page</Link>
    </>
  );
}
