import { cva } from "class-variance-authority"

export const sectionVariants = cva("w-full", {
  variants: {
    variant: {
      default:   "bg-background text-foreground",
      muted:     "bg-muted text-muted-foreground",
      primary:   "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      accent:    "bg-accent text-accent-foreground",
      /**
       * Uses inverted semantic tokens instead of raw Tailwind values so it
       * respects theme customisation and dark-mode overrides.
       */
      dark:      "bg-foreground text-background",
      /**
       * Fully transparent — lets a parent gradient / image bleed through.
       */
      ghost:     "bg-transparent text-foreground",
    },
    size: {
      none: "py-0",
      xs:   "py-8  md:py-12",
      sm:   "py-12 md:py-16 lg:py-20",
      md:   "py-16 md:py-20 lg:py-24",
      lg:   "py-20 md:py-24 lg:py-32",
      xl:   "py-24 md:py-32 lg:py-40",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})
