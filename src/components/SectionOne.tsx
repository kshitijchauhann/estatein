import { Button } from "@/components/ui/button";
import CircularBadge from "@/components/ui/CircularBadge";

const SectionOne = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row lg:flex-row">
      {/* Left Content */}
      <div className="w-full lg:w-[55%] px-6 md:px-12 lg:pl-24 lg:pr-12 py-16 flex flex-col justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
          Discover Your Dream <br /> Property with Estatein
        </h1>
        <p className="text-zinc-400 text-lg mb-10 max-w-lg">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-16">
          <Button
            variant="outline"
            className="w-full md:w-auto bg-transparent border-zinc-800 text-white px-8 py-6 rounded-xl hover:bg-zinc-900"
          >
            Learn More
          </Button>
          <Button className="w-full md:w-auto bg-[#703BF7] text-white px-8 py-6 rounded-xl hover:bg-[#5d2ed1]">
            Browse Properties
          </Button>
        </div>

        {/* Stats Grid - No Gap Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {[
            { label: "Happy Customers", value: "200+" },
            { label: "Properties For Clients", value: "10k+" },
            { label: "Years of Experience", value: "16+" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-[#1a1a1a] border border-zinc-800 p-5 rounded-xl text-center md:text-left ${
                i === 2 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <p className="text-white text-2xl md:text-3xl font-bold">
                {stat.value}
              </p>
              <p className="text-zinc-500 text-xs md:text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image with Overlaid Badge */}
      <div className="w-full lg:w-[45%] relative min-h-[300px] md:min-h-[500px] px-4 md:px-0">
        <div className="relative w-full h-full rounded-[20px] md:rounded-none overflow-hidden border border-zinc-800 md:border-none bg-[radial-gradient(circle_at_top_right,_rgba(112,59,247,0.3)_0%,_#141414_50%)]">
          <img
            src="/building.png"
            alt="Modern Building"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-12 left-4 md:top-1/2 md:left-0 md:-translate-x-1/2 md:-translate-y-1/2">
          <CircularBadge />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
