import React from "react";
import { VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

 const sectionHeaderVariants = cva(
  "tracking-tight leading-tight text-foreground",
  {
    variants: {
      size: {
        default: "text-2xl md:text-3xl lg:text-4xl font-bold",
        xs: "text-xl md:text-2xl lg:text-3xl font-semibold",
        sm: "text-2xl md:text-3xl lg:text-4xl font-semibold",
        md: "text-3xl md:text-4xl lg:text-5xl font-bold",
        lg: "text-4xl md:text-5xl lg:text-6xl font-bold",
        xl: "text-5xl md:text-6xl lg:text-7xl font-extrabold",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

 const sectionDescriptionVariants = cva("text-foreground/80", {
  variants: {
    size: {
      default: "text-base md:text-lg",
      xs: "text-sm md:text-base lg:text-lg",
      sm: "text-base md:text-lg lg:text-xl",
      md: "text-lg md:text-xl lg:text-2xl",
      lg: "text-xl md:text-2xl lg:text-3xl",
      xl: "text-2xl md:text-3xl lg:text-4xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export  function SectionHeader({
  className,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"h2"> &
  VariantProps<typeof sectionHeaderVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "h2";
  return (
    <Comp
      data-slot="section-header"
      className={cn(sectionHeaderVariants({ size }), className)}
      {...props}
    />
  );
}


export  function SectionDescription({
  className,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> &
  VariantProps<typeof sectionDescriptionVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "p";
  return (
    <Comp
      data-slot="section-description"
      className={cn(sectionDescriptionVariants({ size }), className)}
      {...props}
    />
  );
}




