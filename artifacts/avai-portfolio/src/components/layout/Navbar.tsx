import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Lab", href: "/lab" },
    { name: "About", href: "/about" },
  ];

  // Pages with dark hero sections at the top — need white nav text when transparent
  const isDarkPage = location === "/" || location === "/lab";
  const onDark = !scrolled && isDarkPage;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-xl tracking-tight z-50 group flex items-center"
        >
          <span
            className={cn(
              "transition-colors group-hover:opacity-80",
              onDark ? "text-white" : "text-foreground"
            )}
          >
            AV
          </span>
          <span
            className="inline-block rounded-full bg-primary flex-shrink-0 mx-[3px]"
            style={{ width: "5px", height: "5px", marginBottom: "0.3em" }}
          />
          <span
            className={cn(
              "transition-colors group-hover:opacity-80",
              onDark ? "text-white" : "text-foreground"
            )}
          >
            AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-mono transition-colors",
                location.startsWith(link.href)
                  ? onDark
                    ? "text-white"
                    : "text-primary"
                  : onDark
                  ? "text-white/60 hover:text-white"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className={cn(
              "text-sm font-mono border px-4 py-2 rounded-full transition-colors",
              onDark
                ? "border-white/40 text-white hover:border-white hover:text-white"
                : "border-border text-foreground hover:border-primary hover:text-primary"
            )}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden z-50", onDark ? "text-white" : "text-foreground")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-2xl font-serif transition-colors",
                  location.startsWith(link.href) ? "text-primary" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-xl font-serif text-primary border border-primary px-8 py-3 rounded-full mt-4"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
