import React from 'react'
import {Card,CardHeader,CardDescription,CardContent,CardFooter,CardTitle} from "@/components/ui/card"
import Section from './section'
import { SectionHeader } from './section.header'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FaGithubAlt } from 'react-icons/fa6'

export default function Portfolio() {
  return (
      <Section size={"xs"}>
        <div className="text-center max-w-4xl mx-auto mb-8">
          <p className="text-xs font-medium tracking-widest uppercase text-orange-600 mb-2">
            Our services {/* 12px · eyebrow */}
          </p>
          {/* <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground mb-4">
           Projects
          </h2> */}
          <SectionHeader size="sm" className="mb-4">
            Project
          </SectionHeader>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="pt-0">
            <CardContent className="px-0 relative aspect-video">
              <Image
                src="/gallery-1.png"
                alt="Portfolio"
                className="rounded-t-xl"
                width={1280}
                height={720}
              />
            </CardContent>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Personal Portfolio
              </CardTitle>
              <CardDescription>
                Smooth, flowing gradients blending rich reds and blues in an
                abstract swirl.
              </CardDescription>
            </CardHeader>
            <CardFooter className="gap-4 max-sm:flex-col max-sm:items-stretch">
              <Button asChild={true} size={"lg"}>
                <Link href={"https://shambel-dev.vercel.app/"} target="_blank">
                  <ArrowUpRight /> <span>View Demo</span>
                </Link>
              </Button>
              <Button variant={"outline"} size={"lg"} asChild={true}>
                <Link href={"https://github.com/shambelmekuria/my_portfolio"} target="_blank">  
                  <FaGithubAlt/> <span>Github Link</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>
  )
}
