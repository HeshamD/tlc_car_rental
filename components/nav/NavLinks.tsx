import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const navlinks = [
    {
      label: "Apply Now",
      href: "/apply-now",
    },
    {
      label: "Vehicles",
      href: "/vehicles",
    },
    {
      label: "Apply Now",
      href: "/apply-now",
    },
    {
      label: "Return Car",
      href: "/return-car",
    },
    {
      label: "Calculator",
      href: "/calculator",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Contacts",
      href: "/contacts",
    },
  ];
  return (
    <ul className="hidden xl:flex gap-12 h-full">
      {navlinks.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
