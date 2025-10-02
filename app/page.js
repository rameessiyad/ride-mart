import Image from "next/image";
import HomeSearch from "@/components/homeSearch";
import { Bike, Calendar, ChevronRight, Heart, Shield } from "lucide-react";
import { bikeMakes, faqItems, featuredBikes } from "@/lib/data";
import BikeCard from "@/components/bikeCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import { SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="pt-22 mt-4 flex flex-col">
      {/* Hero */}
      <section className="relative py-16 md:py-28 dotted-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-8xl mb-4 font-extrabold gradient-title">
              Find your dream bike with Ride Mart
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
              Advanced AI Bike Search and test drive from thousands of bikes
            </p>
          </div>

          {/* Search */}
          <HomeSearch />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Bikes</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/bikes">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBikes.map((bike) => {
              return <BikeCard id={bike.id} bike={bike} key={bike.id} />;
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Browse by Make</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/bikes">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {bikeMakes.map((make) => {
              return (
                <Link
                  key={make.name}
                  href={`/bikes?make=${make.name}`}
                  className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition cursor-pointer"
                >
                  <div className="h-16 w-auto mb-2 relative">
                    <Image
                      src={make.image}
                      alt="make.name"
                      style={{ objectFit: "contain" }}
                      fill
                    ></Image>
                  </div>
                  <h3 className="font-medium">{make.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* why choose us  */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            Why Choose Our Platform
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Bike className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                Thousands of verified vehicles from trusted dealerships and
                private sellers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Test Drive</h3>
              <p className="text-gray-600">
                Book a test drive online in minutes, with flexible sheduling
                options.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Process</h3>
              <p className="text-gray-600">
                Verified listings and secure booking process for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => {
              return (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      <section className="py-16 dotted-background text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl  font-bold  mb-4">Ready to Find Your Dream Bike?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect
            vehicle through our platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant={"secondary"} asChild>
              <Link href="/biks">View All Bikes</Link>
            </Button>
            <SignedOut>
              <Button size="lg" asChild>
                <Link href="/sign-up">Sign Up Now</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </section>
    </div>
  );
}
