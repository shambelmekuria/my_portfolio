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
  thumnail: string;
  alt: string;
  github?: string;
  demo?: string;
};
export default function PortfolioCard({
  title,
  thumnail,
  description,
  github,
  demo,
}: PortfolioCardProps) {
  return (
    <Card>
      <CardContent className="px-0 relative aspect-video">
        <Image
          src={`/${thumnail}`}
          alt="Portfolio"
          className="rounded-t-xl"
          width={1280}
          height={720}
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
