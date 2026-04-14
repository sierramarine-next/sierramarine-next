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
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md overflow-visible">
      <div className="relative w-full overflow-visible">
        <div className="w-full flex justify-center overflow-visible">
          <Image
            src="/logo.png"
            alt="Sierra Marine"
            width={800}
            height={200}
            className="h-auto w-full max-w-4xl object-contain"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <Link
              href={toggleHref}
              className="hidden md:inline-flex items-center rounded-full border border-navy-900/50 px-3 py-1 text-sm font-semibold text-navy-900 hover:bg-navy-900/10"
            >
              {isEn ? "TR" : "EN"}
            </Link>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md border border-navy-900/50 p-2 text-sm text-navy-900"
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
                      : "text-navy-900 hover:text-gold-500"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={toggleHref}
              className="md:hidden inline-flex items-center justify-center rounded-full border border-navy-900/50 px-3 py-1 text-sm font-semibold text-navy-900 hover:bg-navy-900/10 mt-2"
              onClick={() => setOpen(false)}
            >
              {isEn ? "TR" : "EN"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
