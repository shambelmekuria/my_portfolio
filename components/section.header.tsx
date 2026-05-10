import React from "react";
import { sectionDescriptionVariants, sectionHeaderVariants } from "./section.header.variants";
import { VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

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



