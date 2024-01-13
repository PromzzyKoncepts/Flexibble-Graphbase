import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../../constant";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flex justify-between py-5 px-8 border-b border-nav-border gap-4 items-center">
      <div className="flex items-center justify-start gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={115}
            height={43}
            alt="flexibble"
          ></Image>
          {/* the image tag from next js is inbuilt with cool image handling features */}
        </Link>
        <ul className="hidden xl:flex text-base gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Project</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
