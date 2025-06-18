import Link from "next/link";

import Image from "next/image";

import myImage from "@/../public/images/IMG_20230303_101055_183.jpg";

import headerStyles from "@/app/Components/header.module.css";

export default function NavPage() {
  return (
    <div className={headerStyles.body}>
      <nav className={headerStyles.nav}>
        <Image src={myImage} alt="my image" placeholder="blur" width="100" />
        <Link href={`/`} className={headerStyles.link}>
          <h1>Home</h1>
        </Link>
        <Link href={`/rollercoasters`} className={headerStyles.link}>
          <h1>RollerCoasters</h1>
        </Link>
      </nav>
    </div>
  );
}
