import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string }
>;

interface NavItem {
  href: string;
  label: string;
}

interface ContactItem {
  href: string;
  label: string;
  icon: IconComponent;
  external?: boolean;
}

interface SocialItem {
  href: string;
  label: string;
  icon: IconComponent;
}

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

const BRAND_NAME = "Shambel";
const COPYRIGHT_YEAR = new Date().getFullYear();

const footerLinks: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const contactLinks: readonly ContactItem[] = [
  {
    href: "mailto:shambelmekuria2022@gmail.com",
    label: "shambelmekuria2022@gmail.com",
    icon: Mail,
  },
  {
    href: "tel:+251905403516",
    label: "+251 905 403 516",
    icon: Phone,
  },
  {
    href: "https://www.google.com/maps/search/?api=1&query=Kombolcha%2C+Ethiopia",
    label: "Kombolcha, Ethiopia",
    icon: MapPin,
    external: true,
  },
];

// TODO: Replace each URL with your real profile before shipping.
const socialLinks: readonly SocialItem[] = [
  { href: "https://github.com/your-username", label: "GitHub", icon: FaGithub },
  {
    href: "https://linkedin.com/in/your-username",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  { href: "https://t.me/your-username", label: "Telegram", icon: FaTelegram },
  {
    href: "https://x.com/your-username",
    label: "X (Twitter)",
    icon: FaXTwitter,
  },
];

/* -------------------------------------------------------------------------- */
/*                                Shared styles                               */
/* -------------------------------------------------------------------------- */

const linkStyles = cn(
  "rounded-sm text-muted-foreground transition-colors duration-200 motion-reduce:transition-none",
  "hover:text-foreground",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

const headingStyles =
  "text-sm font-semibold uppercase tracking-wider text-foreground";

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr] lg:gap-12">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label={`${BRAND_NAME} – home`}
              className={cn(
                "inline-block rounded-sm text-2xl font-bold tracking-tight text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
            >
              {BRAND_NAME}
              <span className="text-primary" aria-hidden="true">
                .
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-7">
              Web Design and Development Instructor passionate about technology,
              education, and building useful digital solutions.
            </p>

            <ul
              aria-label="Social media"
              className="-ml-2.5 flex items-center gap-1 pt-2"
            >
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="size-10 text-muted-foreground hover:text-foreground"
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="size-5" aria-hidden="true" />
                      <span className="sr-only">
                        {label} (opens in a new tab)
                      </span>
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-labelledby="footer-nav-heading" className="space-y-4">
            <h2 id="footer-nav-heading" className={headingStyles}>
              Quick Links
            </h2>

            <ul className="space-y-3 text-sm">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(linkStyles, "inline-block py-0.5")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address
            aria-labelledby="footer-contact-heading"
            className="space-y-4 not-italic"
          >
            <h2 id="footer-contact-heading" className={headingStyles}>
              Get in Touch
            </h2>

            <ul className="space-y-4">
              {contactLinks.map(({ href, label, icon: Icon, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className={cn(linkStyles, "flex items-start gap-3 text-sm")}
                  >
                    <Icon
                      className="mt-0.5 size-[1.125rem] shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 [overflow-wrap:anywhere]">
                      {label}
                      {external && (
                        <span className="sr-only"> (opens in a new tab)</span>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>

        <Separator className="mt-12" />

        <p className="pt-6 text-center text-sm">
          © {COPYRIGHT_YEAR} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
