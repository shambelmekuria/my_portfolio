import { MailCheck, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    {
      link: "#",
      label: "Home",
    },
    {
      link: "#",
      label: "About",
    },
    {
      link: "#",
      label: "Portfolio",
    },
    {
      link: "#",
      label: "Contact",
    },
  ];
  const address = [
    {
      link: "#",
      icon: <MapPin size={20} />,
      label: "123 Main Street, City, Country",
    },
    {
      link: "#",
      icon: <MailCheck size={20} />,
      label: "shambelmekuria2022@gmail.com",
    },
    {
      link: "#",
      icon: <Phone size={20} />,
      label: "+251905403516",
    },
  ];
  const socialMedia = [
    {
      link: "#",
      icon: <FaGithub size={20} />,
    },
    {
      link: "#",
      icon: <FaLinkedin size={20} />,
    },
    {
      link: "#",
      icon: <FaTelegram size={20} />,
    },
    {
      link: "#",
      icon: <FaTwitter size={20} />,
    },
  ];
  return (
    <section className="bg-slate-800 text-slate-400 py-12 px-4 md:px-6 lg:px-8 relative bottom-0 w-full">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr]  gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wide text-white">
              Shambel
            </h3>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              minus est quae nisi molestiae doloribus!
            </p>
            <div className="flex gap-4">
              {socialMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  className="text-sm text-slate-300 hover:text-white hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide text-white">
              Useful Links
            </h3>
            <ul className="space-y-2 ">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.link}
                    className="inline-block text-sm hover:text-white hover:translate-x-1 transition-all duration-300 ease-in-out"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide text-white">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              {address.map((addres, index) => (
                <p className="text-sm flex gap-2 items-center" key={index}>
                  {addres.icon}
                  <span>{addres.label}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t  border-t-slate-600 pt-8">
        <div className="flex justify-center items-center text-sm text-center">
          &copy; {currentYear} Shambel. All rights reserved
        </div>
      </div>
    </section>
  );
}
