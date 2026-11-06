import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import Section from "@/components/section";
import { ContactUsForm } from "./contact-us-form";
import ContactCard, { ColorKey } from "./contact-card";
type contactInfoType = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color?: ColorKey;
};

export function ContactUs() {
  const contactInfo: contactInfoType[] = [
    {
      icon: Mail,
      title: "Email",
      description: "shambelmekuria2022@gmail.com",
      color: "green",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+251905403516",
      color: "orange",
    },
    {
      icon: MapPin,
      title: "Address",
      description: "123 Main Street, City, State 12345",
    },
  ];
  return (
    <>
      <Section variant="default" size="sm" id="contact-us">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Contact Us</h2>
          <p className="text-neutral-500">
            Have questions or need assistance? Our team is here to help you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="py-12 px-4 sm:px-6 lg:px-8 border">
            <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
            <p className="text-neutral-500 text-sm mb-6">
              Have questions or need assistance? Our team is here to help you.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => {
                return (
                  <ContactCard
                    className="rounded-sm"
                    key={item.title}
                    Icon={item.icon}
                    title={item.title}
                    description={item.description}
                    color={item.color}
                  />
                );
              })}
            </div>
          </div>
          <ContactUsForm />
        </div>
      </Section>
    </>
  );
}
