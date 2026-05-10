import * as React from "react"
import { Slot } from "radix-ui"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { sectionVariants } from "./section.variants"

// ---------------------------------------------------------------------------
// Container helper — single source of truth for the inner constraint box.
// Pass `containerClassName` to override on a per-instance basis.
// ---------------------------------------------------------------------------

const DEFAULT_CONTAINER_CLASS =
  "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type SectionProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants> & {
    /**
     * Renders the child component in place of `<section>` (Radix Slot
     * pattern). Useful for composing with router `<Link>` or `<article>`.
     */
    asChild?: boolean

    /**
     * Wraps children in a max-width container div.
     * @default true
     */
    container?: boolean

    /**
     * Merges extra classes onto the inner container `<div>`.
     * Only relevant when `container` is `true`.
     */
    containerClassName?: string
  }

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
      const hasLabel =
        props["aria-label"] ||
        props["aria-labelledby"]

      if (!hasLabel && !asChild) {
        console.warn(
          "[Section] <section> elements should have an accessible name. " +
          "Add `aria-label` or `aria-labelledby` so screen-reader users can " +
          "identify this landmark.",
        )
      }
    }

    const Comp = asChild ? Slot.Root : "section"

    return (
      <Comp
        ref={ref}
        className={cn(sectionVariants({ variant, size }), className)}
        {...props}
      >
        {container ? (
          <div
            className={cn(DEFAULT_CONTAINER_CLASS, containerClassName)}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </Comp>
    )
  },
)

Section.displayName = "Section"

export default Section
export { type SectionProps, sectionVariants }
