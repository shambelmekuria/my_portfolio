"use client";

import type { ComponentProps } from "react";
import { MotionConfig, motion } from "motion/react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export type SkillSize = "sm" | "md" | "lg";

export type SkillColor =
  | "primary"
  | "blue"
  | "coral"
  | "green"
  | "amber"
  | "purple"
  | "teal";

export interface SkillProps extends Omit<
  ComponentProps<"div">,
  "title" | "color"
> {
  title: string;
  /** Proficiency from 0 to 100. Out-of-range values are clamped. */
  percent: number;
  subtitle?: string;
  color?: SkillColor;
  size?: SkillSize;
}

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const sizeStyles = {
  sm: {
    card: "gap-2 p-3",
    track: "h-1",
    title: "text-sm",
    value: "text-xs",
    subtitle: "text-xs",
  },
  md: {
    card: "gap-3 p-4",
    track: "h-1.5",
    title: "text-base",
    value: "text-sm",
    subtitle: "text-sm",
  },
  lg: {
    card: "gap-4 p-5",
    track: "h-2",
    title: "text-lg",
    value: "text-sm",
    subtitle: "text-sm",
  },
} as const satisfies Record<SkillSize, Record<string, string>>;

// Light-mode text uses the -700 shade (>= 4.5:1 on white); dark mode uses -400.
const colorMap = {
  primary: { fill: "bg-primary", text: "text-primary" },
  blue: { fill: "bg-blue-500", text: "text-blue-700 dark:text-blue-400" },
  coral: {
    fill: "bg-orange-500",
    text: "text-orange-700 dark:text-orange-400",
  },
  green: { fill: "bg-green-600", text: "text-green-700 dark:text-green-400" },
  amber: { fill: "bg-amber-500", text: "text-amber-700 dark:text-amber-400" },
  purple: {
    fill: "bg-violet-500",
    text: "text-violet-700 dark:text-violet-400",
  },
  teal: { fill: "bg-teal-500", text: "text-teal-700 dark:text-teal-400" },
} as const satisfies Record<SkillColor, { fill: string; text: string }>;

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

export default function Skill({
  title,
  percent,
  subtitle,
  color = "primary",
  size = "md",
  className,
  ...props
}: SkillProps) {
  // Keep progress within the valid range.
  const value = Number.isFinite(percent)
    ? Math.round(Math.min(100, Math.max(0, percent)))
    : 0;

  const styles = sizeStyles[size];
  const { fill, text } = colorMap[color];

  return (
    <Card
      className={cn(
        "flex h-full flex-col border-border/60 shadow-none",
        "transition-colors duration-300 motion-reduce:transition-none",
        "hover:border-primary/30",
        styles.card,
        className,
      )}
      {...props}
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className={cn("min-w-0 font-medium text-foreground", styles.title)}>
          {title}
        </p>

        <span
          className={cn(
            "shrink-0 font-semibold tabular-nums",
            styles.value,
            text,
          )}
        >
          {value}%<span className="sr-only"> proficiency</span>
        </span>
      </div>

      {/* Decorative bar: the title and percentage above carry the information */}
      <div
        aria-hidden="true"
        className={cn(
          "w-full overflow-hidden rounded-full bg-muted",
          styles.track,
        )}
      >
        <MotionConfig reducedMotion="user">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ width: `${value}%` }}
            className={cn("h-full origin-left rounded-full", fill)}
          />
        </MotionConfig>
      </div>

      {subtitle && (
        <p
          className={cn(
            "leading-relaxed text-pretty text-muted-foreground",
            styles.subtitle,
          )}
        >
          {subtitle}
        </p>
      )}
    </Card>
  );
}
