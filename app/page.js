import Image from "next/image";
import HomeSearch from "@/components/homeSearch";
import { ChevronRight, Heart } from "lucide-react";
import { featuredBikes } from "@/lib/data";
import BikeCard from "@/components/bikeCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
            <Button  variant="ghost" className="flex items-center" asChild>
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
            <Button  variant="ghost" className="flex items-center" asChild>
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
    </div>
  );
}
