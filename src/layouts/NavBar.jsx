"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router"
import { schoolDetails } from "../utils/constant"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "HRIT", href: "/academy" },
    { name: "Admission", href: "/admission" },
    { name: "Alumni Committee", href: "/alumni" },
    { name: "Notices", href: "/event" },
    { name: "News", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: "Downloads", href: "/downloads" },
    { name: "Contact", href: "/articles" },

  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#005B7F] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  // src={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/placeholder.svg?height=50&width=50`}
                  src={schoolDetails?.logo}
                  alt="HRIT Academy"
                  className="h-12 w-auto"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-white hover:bg-[#0073a3] px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#0073a3] focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>




{/* Started */}




        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:bg-[#0073a3] block px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Spacer div to prevent content from going under navbar */}
      <div className="h-16"></div>
    </>
  )
}

export default Navbar

