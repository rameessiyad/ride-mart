import Image from "next/image";
import HomeSearch from "@/components/homeSearch";
import { ChevronRight } from "lucide-react";

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
        <div>
          <div>
            <h2>Featured Bikes</h2>
            <button>
              View All <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
