"use client";

import { Book, Home, Info, Menu, Rocket, Target, Users, X } from "lucide-react";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const navItems = [
    { id: "/", label: "Home", icon: Home },
    { id: "/projects", label: "Projects", icon: Rocket },
    // { id: "/blog", label: "Blog", icon: BookOpen },
    // { id: "/roadmap", label: "Roadmap", icon: MapPin },
    { id: "/contribute", label: "Contribute", icon: Users },
    // { id: "/docs", label: "Docs", icon: Book },
    // { id: "/team", label: "Team", icon: Target },
    { id: "/about", label: "About Us", icon: Info },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState(
    pathname === "/" ? "/" : pathname
  );
  const primaryColor = "#8D153A";
  useEffect(() => {
    const handleScroll = () => {
      // Only consider sections that have an id
      const sections = document.querySelectorAll("section[id]");
      // default to current pathname to avoid flashing an unrelated key
      let currentSectionPath = pathname || "/";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
          // map section ids like "home" -> "/", and "mission" -> "/mission"
          const id = section.id || "";
          currentSectionPath = id === "home" || id === "" ? "/" : `/${id}`;
        }
      });

      setActiveSection(currentSectionPath);
    };

    window.addEventListener("scroll", handleScroll);
    // run once to initialize active state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="Platform Logo"
                width={120}
                height={40}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.id} href={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-700 hover:text-white hover:bg-[#8D153A]"
                    }`}
                    style={
                      activeSection === item.id
                        ? { backgroundColor: primaryColor }
                        : {}
                    }
                  >
                    {/* <Icon className="w-4 h-4" /> */}
                    {item.label}
                  </button>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                    style={
                      activeSection === item.id
                        ? { backgroundColor: primaryColor }
                        : {}
                    }
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
