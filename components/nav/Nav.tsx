import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import NavActionBtns from "./NavActionBtns";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <header>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        {/* logo */}
        <Link href="/">
          <Image src="nav/header-logo.svg" alt="logo" height={180} width={50} />
        </Link>
        {/* links */}
        <NavLinks />
        {/* actionBtns */}
        <NavActionBtns />
        {/* moblieNav */}
        <MobileNav />
      </nav>
    </header>
  );
};

export default Nav;
