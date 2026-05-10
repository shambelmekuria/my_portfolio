import { cva } from "class-variance-authority";

export const sectionHeaderVariants = cva(
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

export const sectionDescriptionVariants = cva("text-foreground/80", {
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
