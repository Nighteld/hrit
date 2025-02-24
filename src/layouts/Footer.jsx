import { Link } from "react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react"


export default function Footer() {
    return (
      <footer className="bg-color text-white w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-white text-2xl font-bold">HRIT Academy</h2>
            {/* <p className="mt-2">Making the world a better place</p> */}
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link to="#" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="#" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="contact-us" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} HRIT Academy. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-white bg-[#1877F2] hover:bg-[#1877F2]/80 transition-colors p-2 rounded-full">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-white bg-[#E4405F] hover:bg-[#E4405F]/80 transition-colors p-2 rounded-full">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-white bg-[#0A66C2] hover:bg-[#0A66C2]/80 transition-colors p-2 rounded-full">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
    )
}