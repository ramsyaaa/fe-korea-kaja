import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Schedule", href: "/schedule" },
  { label: "Eligible", href: "/eligible" },
  { label: "Finalist", href: "/finalist" },
  { label: "How To", href: "/how-to" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navigation: React.FC<NavigationProps> = ({ items = defaultNavItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`font-medium transition-colors hover:text-kpink-500 ${
              location.pathname === item.href
                ? "text-kpink-500"
                : "text-gray-700"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Button variant="primary" size="sm">
          Sign Up
        </Button>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        className="md:hidden fixed top-6 right-6 z-50 p-2 rounded-md bg-white shadow-md"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-kpink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="flex flex-col h-full p-8 pt-20">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`py-3 text-xl font-medium ${
                  location.pathname === item.href
                    ? "text-kpink-500"
                    : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6">
              <Button variant="primary" size="md" className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
