import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-22 mt-4 flex flex-col">
      {/* Hero */}
      <section className="relative py-16 md:py-28 dotted-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1>Find your dream bike with Ride Mart</h1>
            <p>
              Advanced AI Bike Search and test drive from thousands of bikes
            </p>
          </div>

          {/* Search */}
        </div>
      </section>
    </div>
  );
}
