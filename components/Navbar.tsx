"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const isEn = pathname.startsWith("/en");

  const navItems = isEn
    ? [
        { href: "/en", label: "Home" },
        { href: "/en/hakkimizda", label: "About" },
        { href: "/en/hizmetler", label: "Services" },
        { href: "/en/iletisim", label: "Contact" },
      ]
    : [
        { href: "/", label: "Anasayfa" },
        { href: "/hakkimizda", label: "Hakkımızda" },
        { href: "/hizmetler", label: "Hizmetler" },
        { href: "/iletisim", label: "İletişim" },
      ];

  const toggleHref = isEn
    ? pathname === "/en"
      ? "/"
      : pathname.replace(/^\/en/, "") || "/"
    : pathname === "/"
    ? "/en"
    : `/en${pathname}`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href={isEn ? "/en" : "/"} className="flex items-center">
          <Image src="/logo.png" alt="Sierra Marine" width={160} height={60} priority />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href={toggleHref}
            className="hidden md:inline-flex items-center rounded-full border border-primary-600 px-3 py-1 text-sm font-semibold text-primary-600 hover:bg-primary-50"
          >
            {isEn ? "TR" : "EN"}
          </Link>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border p-2 text-sm"
            onClick={() => setOpen(!open)}
          >
            Menü
          </button>
        </div>

        <nav
          className={`${
            open ? "flex" : "hidden"
          } absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md flex-col p-4 gap-2 md:static md:flex md:flex-row md:items-center md:gap-4 md:p-0 md:bg-transparent md:backdrop-blur-none border-t md:border-t-0`}
        >
          {navItems.map((item) => {
            const active =
              item.href === (isEn ? "/en" : "/")
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 transition-colors ${
                  active
                    ? "text-gold-500 font-semibold border-b-2 border-gold-500"
                    : "text-gray-700 hover:text-gold-500"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={toggleHref}
            className="md:hidden inline-flex items-center justify-center rounded-full border border-primary-600 px-3 py-1 text-sm font-semibold text-primary-600 hover:bg-primary-50 mt-2"
            onClick={() => setOpen(false)}
          >
            {isEn ? "TR" : "EN"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
