import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
export type ColorKey = "purple" | "red" | "blue" | "green" | "orange"; // Define a type for the color keys

const contactCardIconVariants = cva(
  "w-12 h-12 flex items-center justify-center rounded-lg transition-colors duration-200 ease-in-out shadow group-hover:text-white",
  {
    variants: {
      color: {
        purple: [
          "bg-purple-50",
          "text-purple-600",
          "group-hover:bg-purple-500",
        ],
        red: ["bg-red-50", "text-red-600", "group-hover:bg-red-500"],
        blue: ["bg-blue-50", "text-blue-600", "group-hover:bg-blue-500"],
        green: ["bg-green-50", "text-green-600", "group-hover:bg-green-500"],
        orange: [
          "bg-orange-50",
          "text-orange-600",
          "group-hover:bg-orange-500",
        ],
      },
    },
    defaultVariants: {
      color: "blue",
    },
  },
);

type ContactCardProps = React.ComponentProps<"div"> &
  VariantProps<typeof contactCardIconVariants> & {
    Icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  };

export default function ContactCard({
  className,
  color,
  Icon,
  title,
  description,
}: ContactCardProps) {
  return (
    <div
      className="group flex items-center gap-6 p-4 border shadow-xs rounded-lg"
      key={title}
    >
      <div className={cn(contactCardIconVariants({ color }), className)}>
        <Icon className="h-5 w-5 shrink-0" />
      </div>
      <div className="space-y-1">
        <p className="text-sm text-neutral-800 dark:text-neutral-200 font-medium">{title}</p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">{description}</p>
      </div>
    </div>
  );
}
