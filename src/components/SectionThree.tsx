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
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const properties = [
  {
    id: 1,
    image: "/building1.png",
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    beds: "4-Bedroom",
    baths: "3-Bathroom",
    type: "Villa",
    price: "$550,000",
  },
  {
    id: 2,
    image: "/building2.png",
    title: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
    beds: "2-Bedroom",
    baths: "2-Bathroom",
    type: "Villa",
    price: "$550,000",
  },
  {
    id: 3,
    image: "/building3.png",
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    beds: "3-Bedroom",
    baths: "3-Bathroom",
    type: "Villa",
    price: "$550,000",
  },
];

const SectionThree = () => {
  return (
    <div className="w-full bg-[#0a0a0a] py-16 px-6 md:px-12 lg:px-24 flex flex-col gap-10">
      {/* Header Section */}
      <div className="w-full flex justify-between items-end">
        <div className="space-y-2">
          <h2 className="text-white text-3xl font-bold">Featured Properties</h2>
          <p className="text-zinc-400 max-w-2xl">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein.
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800 hidden md:block"
        >
          View All Properties
        </Button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property, index) => (
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

            <CardHeader className="p-0 mb-6">
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

            <CardContent className="p-0 flex gap-2 flex-wrap mb-8">
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

            <CardFooter className="p-0 flex justify-between items-center mt-auto">
              <div>
                <p className="text-sm text-zinc-500">Price</p>
                <p className="text-xl font-bold">{property.price}</p>
              </div>
              <Button className="bg-[#703BF7] hover:bg-[#5d2ed1] text-white px-6 py-5 rounded-xl">
                View Property Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-zinc-900 md:border-none md:pt-0 gap-4 md:gap-0">
        <Button
          variant="outline"
          className="bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800 w-full md:hidden order-1"
        >
          View All Properties
        </Button>

        <div className="text-zinc-400 order-2 md:order-1 hidden md:block">
          <span className="text-white font-medium">01</span> of 60
        </div>

        <div className="flex gap-3 ml-auto md:ml-0 order-3 md:order-2 w-full md:w-auto justify-between md:justify-start">
          <div className="text-zinc-400 block md:hidden">
            <span className="text-white font-medium">01</span> of 60
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-[#141414] border-zinc-800 text-white hover:bg-zinc-800 w-12 h-12"
            >
              <GoArrowLeft className="text-xl" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-[#141414] border-zinc-800 text-white hover:bg-zinc-800 w-12 h-12"
            >
              <GoArrowRight className="text-xl" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
