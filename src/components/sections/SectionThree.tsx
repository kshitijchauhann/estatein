import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IoBed } from "react-icons/io5";
import { FaBath, FaBuilding } from "react-icons/fa";
import { PROPERTIES } from "@/data";
import SectionStars from "@/components/ui/SectionStars";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Pagination } from "@/components/common/Pagination";
import { usePagination } from "@/hooks/usePagination";

const SectionThree = () => {
  const { currentPage, goToPrevious, goToNext } = usePagination({
    totalPages: 60,
  });

  return (
    <div className="w-full py-16 px-6 md:px-12 lg:px-24 flex flex-col gap-10">
      {/* Header Section */}
      <SectionHeader
        preTitle={<SectionStars className="justify-start" />}
        title="Featured Properties"
        description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROPERTIES.map((property, index) => (
          <Card
            key={property.id}
            className={`bg-[#141414] border-zinc-800 p-6 rounded-2xl text-white flex flex-col h-full ${index > 0 ? "hidden md:flex" : "flex"
              }`}
          >
            {/* Image container with fixed aspect ratio */}
            <div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
              <img
                src={property.image}
                alt={property.title}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            <CardHeader className="p-0 ">
              <CardTitle className="text-xl font-semibold mb-2">
                {property.title}
              </CardTitle>
              <CardDescription className="text-zinc-400 text-sm leading-relaxed">
                {property.description}{" "}
                <span className="text-white underline cursor-pointer font-medium">
                  Read More
                </span>
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 flex gap-2 flex-wrap">
              <Badge
                variant="outline"
                className="bg-[#1a1a1a] border-zinc-800 text-zinc-300 px-3 py-1 flex gap-2 font-normal rounded-full"
              >
                <IoBed className="text-lg" /> {property.beds}
              </Badge>
              <Badge
                variant="outline"
                className="bg-[#1a1a1a] border-zinc-800 text-zinc-300 px-3 py-1 flex gap-2 font-normal rounded-full"
              >
                <FaBath /> {property.baths}
              </Badge>
              <Badge
                variant="outline"
                className="bg-[#1a1a1a] border-zinc-800 text-zinc-300 px-3 py-1 flex gap-2 font-normal rounded-full"
              >
                <FaBuilding /> {property.type}
              </Badge>
            </CardContent>

            <CardFooter className="p-0 flex justify-between items-center md:flex-col md:items-start lg:justify-between lg:flex-row gap-2 mt-auto">
              <div>
                <p className="text-sm text-zinc-500">Price</p>
                <p className="text-xl font-bold">{property.price}</p>
              </div>
              <Button className="bg-[#703BF7] hover:bg-[#5d2ed1] text-white mt-2 px-6 py-5 rounded-xl">
                View Property Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-row justify-between items-center pt-4 border-t border-zinc-900 md:border-none md:pt-0 gap-4 md:gap-0">
        <Button
          variant="outline"
          className="bg-[#141414] text-white border-zinc-800 hover:bg-zinc-800 w-auto px-6 py-5 rounded-lg"
        >
          View All Properties
        </Button>

        <Pagination
          currentPage={currentPage}
          totalPages={60}
          onPrevious={goToPrevious}
          onNext={goToNext}
          className="w-auto border-none pt-0"
        />
      </div>
    </div>
  );
};

export default SectionThree;
