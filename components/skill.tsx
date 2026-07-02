import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const skillVariants = cva(
  "border border-border rounded-lg shadow-sm transition-all ease-in duration-300 hover:-translate-y-1",
  {
    variants: {
      size: {
        sm: "p-3 space-y-2",
        md: "p-4 space-y-3",
        lg: "p-5 space-y-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const trackVariants = cva("rounded-full overflow-hidden bg-slate-100", {
  variants: {
    size: {
      sm: "h-1",
      md: "h-1.5",
      lg: "h-2",
    },
  },
  defaultVariants: { size: "md" },
});

const titleVariants = cva("font-medium", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: { size: "md" },
});

const subtitleVariants = cva("text-muted-foreground", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
    },
  },
  defaultVariants: { size: "md" },
});

export const colorMap = {
  blue: { fill: "bg-blue-500", text: "text-blue-500" },
  coral: { fill: "bg-orange-500", text: "text-orange-500" },
  green: { fill: "bg-green-600", text: "text-green-600" },
  amber: { fill: "bg-amber-500", text: "text-amber-500" },
  purple: { fill: "bg-violet-500", text: "text-violet-500" },
  teal: { fill: "bg-teal-500", text: "text-teal-500" },
} as const;

type SkillColor = keyof typeof colorMap;

type SkillProps = VariantProps<typeof skillVariants> & {
  title: string;
  percent: number;
  subtitle?: string;
  color?: SkillColor;
  className?: string;
};

export default function Skill({
  title,
  percent,
  subtitle,
  color = "blue",
  size = "md",
  className,
}: SkillProps) {
  const { fill, text } = colorMap[color] ?? colorMap.blue;

  return (
    <div className={cn(skillVariants({ size }), className)}>
      <div className="flex items-center justify-between">
        <h3 className={cn(titleVariants({ size }),"text-foreground")}>{title}</h3>
        <span
          className={cn(
            "font-medium",
            text,
            size === "sm" ? "text-xs" : "text-sm",
          )}
        >
          {percent}%
        </span>
      </div>

      <div className={trackVariants({ size })}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn("h-full rounded-full", fill)}
        />
      </div>

      {subtitle && <p className={subtitleVariants({ size })}>{subtitle}</p>}
    </div>
  );
}
