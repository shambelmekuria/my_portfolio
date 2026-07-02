import * as React from "react";
import { Slot } from "radix-ui";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

// Variant styles for the Section component, using class-variance-authority (cva).
const sectionVariants = cva("w-full", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      muted: "bg-muted text-muted-foreground",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      accent: "bg-accent text-accent-foreground",
      /**
       * Uses inverted semantic tokens instead of raw Tailwind values so it
       * respects theme customisation and dark-mode overrides.
       */
      dark: "bg-foreground text-background",
      /**
       * Fully transparent — lets a parent gradient / image bleed through.
       */
      ghost: "bg-transparent text-foreground",
    },
    size: {
      none: "py-0",
      xs: "py-8  md:py-12",
      sm: "py-12 md:py-16 lg:py-20",
      md: "py-16 md:py-20 lg:py-24",
      lg: "py-20 md:py-24 lg:py-32",
      xl: "py-24 md:py-32 lg:py-40",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

// ---------------------------------------------------------------------------
// Container helper — single source of truth for the inner constraint box.
// Pass `containerClassName` to override on a per-instance basis.
// ---------------------------------------------------------------------------

const DEFAULT_CONTAINER_CLASS = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type SectionProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants> & {
    /**
     * Renders the child component in place of `<section>` (Radix Slot
     * pattern). Useful for composing with router `<Link>` or `<article>`.
     */
    asChild?: boolean;

    /**
     * Wraps children in a max-width container div.
     * @default true
     */
    container?: boolean;

    /**
     * Merges extra classes onto the inner container `<div>`.
     * Only relevant when `container` is `true`.
     */
    containerClassName?: string;
  };

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      children,
      asChild = false,
      container = true,
      containerClassName,
      ...props
    },
    ref,
  ) => {
    // Dev-only: nudge consumers to provide an accessible landmark name.
    if (process.env.NODE_ENV === "development") {
      const hasLabel = props["aria-label"] || props["aria-labelledby"];

      if (!hasLabel && !asChild) {
        console.warn(
          "[Section] <section> elements should have an accessible name. " +
            "Add `aria-label` or `aria-labelledby` so screen-reader users can " +
            "identify this landmark.",
        );
      }
    }

    const Comp = asChild ? Slot.Root : "section";

    return (
      <Comp
        ref={ref}
        className={cn(sectionVariants({ variant, size }), className)}
        {...props}
      >
        {container ? (
          <div className={cn(DEFAULT_CONTAINER_CLASS, containerClassName)}>
            {children}
          </div>
        ) : (
          children
        )}
      </Comp>
    );
  },
);

Section.displayName = "Section";

export default Section;
export { type SectionProps, sectionVariants };
