import React from "react";
import Section from "../section";
import { SectionDescription, SectionHeader } from "../section.header";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Code2, MoveRight } from "lucide-react";
import Link from "next/link";
import { GiSecurityGate } from "react-icons/gi";
import { BsVirus } from "react-icons/bs";

export default function ServiceSection() {
  return (
    <Section variant={"secondary"}>
      <div className="max-w-xl mx-auto text-center mb-8 md:mb-12 space-y-6">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200"></h2>
        <SectionHeader size={"sm"}> My Services</SectionHeader>
        <SectionDescription>
          I offer a range of services to help you build exceptional web
          applications.
        </SectionDescription>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <Card className="relative overflow-hidden group p-8 border border-transparent shadow-none rounded-xl transition-shadow duration-300 hover:border-primary hover:shadow-lg">
          {/* <div className="h-1 bg-linear-to-r from-orange-400 to-indigo-600 absolute top-0 left-0 z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out" /> */}
          <CardContent>
            <div className="size-20 bg-orange-600 text-slate-50 rounded-full flex items-center justify-center">
              <Code2 size={48} />
            </div>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl mb-2">Digital Solutions</CardTitle>
            <CardDescription className="text-base">
              Enter your email below to login to your account Lorem ipsum dolor
              sit amet consectetur, adipisicing elit.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="relative overflow-hidden group p-8 border shadow-none rounded-xl">
          <div className="h-1 bg-linear-to-r from-orange-400 to-indigo-600 absolute top-0 left-0 z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
          <CardContent>
            <div className="size-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
              <BsVirus size={48} />
            </div>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl">Secure Systems</CardTitle>
            <CardDescription className="text-base">
              Enter your email below to login to your account Lorem ipsum dolor
              sit amet consectetur, adipisicing elit.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="relative overflow-hidden group p-6 border shadow-none rounded-xl">
          <div className="h-1 bg-linear-to-r from-orange-400 to-indigo-600 absolute top-0 left-0 z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
          <CardContent>
            <div className="size-20 bg-orange-600 text-slate-50 rounded-full flex items-center justify-center">
              <Code2 size={48} />
            </div>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl">Digital Solutions</CardTitle>
            <CardDescription className="text-base">
              Enter your email below to login to your account Lorem ipsum dolor
              sit amet consectetur, adipisicing elit.
            </CardDescription>
          </CardHeader>
        </Card>
        {/* <div className="relative bg-white rounded-lg overflow-hidden p-8 group hover:-translate-y-4 transition-all ease-in-out duration-300">
          <div className="h-1 bg-linear-to-r from-orange-400 to-indigo-600 absolute top-0 left-0 z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
          <div className="size-20 bg-orange-600 text-slate-50 rounded-full flex items-center justify-center mb-8">
            <Code2 size={48} />
          </div>

          <div className="mb-8 space-y-4">
            <h3 className="text-lg font-medium text-slate-900">
              Brand Development
            </h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam.
            </p>
          </div>
        </div> */}
      </div>
    </Section>
  );
}
