import { schoolDetails } from "@/utils/constant";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube
} from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-color text-white w-full">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white text-2xl font-bold mb-5">
              <span className="">HRIT</span> Academy
            </p>
            {/* <p className="mt-2">Making the world a better place</p> */}

            <ul className="space-y-4">
              <li className="flex gap-2 items-center">
                <MapPin className="w-5 h-5 " />
                <a
                  href="  https://maps.app.goo.gl/p9mmcHDQUEoZ8z5N6"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basundhara Chauki, Kanti Marg, Kathmandu, Nepal
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-5 h-5 " />
                <a href="tel:+014972111" className="hover:underline">
                  +977-01-4972111
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-5 h-5 " />
                <a href="tel:014950559" className="hover:underline">
                  +977-01-4950559
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-5 h-5 " />
                <a href="mailto:hritacademy.edu.np" className="hover:underline">
                  hritacademy.edu.np
                </a>
              </li>
            </ul>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link to="#" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="#" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link
              to="contact-us"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HRIT Academy. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4 mt-5">
          <a
            href={schoolDetails.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#1877F2] hover:bg-[#1877F2]/80 transition-colors p-2 rounded-full"
          >
            <Facebook size={24} />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href={schoolDetails.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#E4405F] hover:bg-[#E4405F]/80 transition-colors p-2 rounded-full"
          >
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href={schoolDetails.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#0A66C2] hover:bg-[#0A66C2]/80 transition-colors p-2 rounded-full"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={schoolDetails.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#ff0033] hover:bg-[#E4405F]/80 transition-colors p-2 rounded-full"
          >
            <Youtube size={24} />
            <span className="sr-only">Youtube</span>
          </a>
          <a
            href={schoolDetails.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#1877F2] hover:bg-[#0A66C2]/80 transition-colors p-2 rounded-full"
          >
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
