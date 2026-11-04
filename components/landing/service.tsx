// import {
//   Code2,
//   Database,
//   GraduationCap,
//   ShieldCheck,
//   Globe,
// } from "lucide-react";

// import Section from "../section";
// import { SectionDescription, SectionHeader } from "../section.header";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";

// const services = [
//   {
//     title: "Web Development",
//     description:
//       "Building responsive, modern, and user-friendly websites and web applications using modern web technologies.",
//     icon: Code2,
//   },
//   {
//     title: "Digital Solutions",
//     description:
//       "Developing practical digital solutions that help individuals and organizations improve their online presence.",
//     icon: Globe,
//   },
//   {
//     title: "Database Management",
//     description:
//       "Designing and managing structured databases to organize, store, and maintain application data efficiently.",
//     icon: Database,
//   },
//   {
//     title: "Web Security",
//     description:
//       "Applying security best practices to help protect websites, applications, and user information.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "IT Training",
//     description:
//       "Teaching web design and development fundamentals through practical, hands-on learning experiences.",
//     icon: GraduationCap,
//   },
// ];

// export default function ServiceSection() {
//   return (
//     <Section variant="muted">
//       {/* Section Heading */}
//       <div className="mx-auto mb-10 max-w-2xl space-y-4 text-center md:mb-14">
//         <SectionHeader size="sm">My Services</SectionHeader>

//         <SectionDescription>
//           I provide web development, digital solutions, and technology training
//           to help individuals and organizations achieve their goals.
//         </SectionDescription>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
//         {services.map(({ title, description, icon: Icon }) => (
//           <Card
//             key={title}
//             className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-2 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
//           >
//             {/* Hover Accent */}
//             <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

//             <CardContent className="pt-6">
//               <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
//                 <Icon size={28} strokeWidth={1.8} />
//               </div>
//             </CardContent>

//             <CardHeader className="space-y-3">
//               <CardTitle className="text-xl font-semibold tracking-tight">
//                 {title}
//               </CardTitle>

//               <CardDescription className="text-sm leading-7">
//                 {description}
//               </CardDescription>
//             </CardHeader>
//           </Card>
//         ))}
//       </div>
//     </Section>
//   );
// }

import {
  Code2,
  Database,
  GraduationCap,
  Globe,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import Section from "../section";
import { SectionDescription, SectionHeader } from "../section.header";

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

const services: readonly Service[] = [
  {
    title: "Web Development",
    description:
      "Building responsive, modern, and user-friendly websites and web applications using modern web technologies.",
    icon: Code2,
  },
  {
    title: "Digital Solutions",
    description:
      "Developing practical digital solutions that help individuals and organizations improve their online presence.",
    icon: Globe,
  },
  {
    title: "Database Management",
    description:
      "Designing and managing structured databases to organize, store, and maintain application data efficiently.",
    icon: Database,
  },
  {
    title: "Web Security",
    description:
      "Applying security best practices to help protect websites, applications, and user information.",
    icon: ShieldCheck,
  },
  {
    title: "IT Training",
    description:
      "Teaching web design and development fundamentals through practical, hands-on learning experiences.",
    icon: GraduationCap,
  },
];

/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

/**
 * Grid placement for a 3-per-row desktop layout that centers an incomplete
 * last row (1 or 2 leftover items) using a 6-column grid, and lets an odd
 * last item span the full width on the 2-column tablet layout.
 */
function getGridPlacement(index: number, total: number) {
  const leftover = total % 3;
  const isLast = index === total - 1;

  return cn(
    "lg:col-span-2",
    total % 2 === 1 && isLast && "sm:max-lg:col-span-2",
    leftover === 2 && index === total - 2 && "lg:col-start-2",
    leftover === 1 && isLast && "lg:col-start-3",
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

export default function ServiceSection() {
  return (
    <Section variant="muted" id="services" aria-labelledby="services-heading">
      <header className="mx-auto mb-10 max-w-2xl space-y-4 text-center md:mb-14">
        <SectionHeader id="services-heading" size="sm">
          My Services
        </SectionHeader>

        <SectionDescription>
          I provide web development, digital solutions, and technology training
          to help individuals and organizations achieve their goals.
        </SectionDescription>
      </header>

      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8"
      >
        {services.map(({ title, description, icon: Icon }, index) => (
          <li key={title} className={getGridPlacement(index, services.length)}>
            <Card
              className={cn(
                "group relative h-full overflow-hidden border-border/60 shadow-none",
                "transition duration-300 motion-reduce:transition-none",
                "hover:border-primary/40 hover:shadow-md motion-safe:hover:-translate-y-1",
              )}
            >
              {/* Decorative hover accent */}
              <div
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary",
                  "transition-transform duration-300 motion-reduce:transition-none",
                  "group-hover:scale-x-100",
                )}
              />

              <CardHeader className="space-y-3">
                <div
                  className={cn(
                    "mb-2 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary",
                    "transition-colors duration-300 motion-reduce:transition-none",
                    "group-hover:bg-primary group-hover:text-primary-foreground",
                  )}
                >
                  <Icon
                    className="size-7"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <CardTitle
                  role="heading"
                  aria-level={3}
                  className="text-xl font-semibold tracking-tight"
                >
                  {title}
                </CardTitle>

                <CardDescription className="leading-relaxed text-pretty">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
