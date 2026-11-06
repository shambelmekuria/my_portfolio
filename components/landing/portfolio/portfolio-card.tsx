import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithubAlt } from "react-icons/fa6";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type PortfolioCardProps = {
  title: string;
  description: string;
  thumbnail?: string;
  alt: string;
  tags?: string[];
  github?: string;
  demo?: string;
  priority?: boolean;
};

export default function PortfolioCard({
  title,
  thumbnail,
  alt,
  description,
  tags,
  github,
  demo,
  priority = false,
}: PortfolioCardProps) {
  const file = thumbnail ?? thumbnail ?? "";
  const src =
    file.startsWith("/") || file.startsWith("http") ? file : `/${file}`;

  return (
    <Card className="group h-full gap-0 overflow-hidden py-0 transition-[box-shadow,border-color] duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-within:border-primary/40">
      <CardContent className="relative aspect-video overflow-hidden px-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </CardContent>

      <CardHeader className="gap-2 px-5 pt-5 md:px-6">
        <CardTitle className="text-xl font-semibold tracking-tight">
          {title}
        </CardTitle>
        <CardDescription className="leading-relaxed">
          {description}
        </CardDescription>

        {tags && tags.length > 0 && (
          <ul
            aria-label={`${title} technologies`}
            className="flex flex-wrap gap-2 pt-2"
          >
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </CardHeader>

      {(demo || github) && (
        <CardFooter className="mt-auto gap-3 px-5 pb-5 pt-5 md:px-6 md:pb-6">
          {demo && (
            <Button asChild size="sm" className="group/btn">
              <Link
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo (opens in a new tab)`}
              >
                Live demo
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 motion-reduce:transition-none"
                />
              </Link>
            </Button>
          )}
          {github && (
            <Button asChild size="sm" variant="outline">
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code on GitHub (opens in a new tab)`}
              >
                <FaGithubAlt aria-hidden className="size-4" />
                Source
              </Link>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
