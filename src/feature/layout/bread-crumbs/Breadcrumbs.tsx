"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight, FaHome } from "react-icons/fa";

export function Breadcrumbs() {
  const pathname = usePathname();

  // 1. Divide a URL (ex: "/carros/mercedes" vira ["", "carros", "mercedes"])
  // 2. Remove strings vazias do array
  const segments = pathname.split("/").filter((item) => item !== "");

  return (
    <nav
      className="flex items-center gap-2 text-sm text-gray-500 mb-6"
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="hover:text-[#FF4100] transition-colors flex items-center gap-1"
      >
        <FaHome size={14} />
        <span>Home</span>
      </Link>

      {segments.map((segment, index) => {
        // Monta o link acumulativo (ex: /carros, depois /carros/mercedes)
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;

        return (
          <div key={href} className="flex items-center gap-2">
            <FaChevronRight size={10} className="text-gray-300" />
            {isLast ? (
              // Na última página, o texto não é um link e fica em destaque
              <span className="font-bold text-gray-800 capitalize">
                {segment.replace(/-/g, " ")}
              </span>
            ) : (
              <Link
                href={href}
                className="hover:text-[#FF4100] transition-colors capitalize"
              >
                {segment.replace(/-/g, " ")}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
