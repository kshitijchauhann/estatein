import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const reviews = [
  {
    id: 1,
    title: "Exceptional Service",
    description:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    user: {
      name: "Wade Warren",
      location: "USA, California",
      image: "/profile1.png", // Placeholder
    },
  },
  {
    id: 2,
    title: "Efficient and Reliable",
    description:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    user: {
      name: "Emelie Thomson",
      location: "USA, Florida",
      image: "/profile2.png", // Placeholder
    },
  },
  {
    id: 3,
    title: "Trusted Advisors",
    description:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were truly impressive. Thank you for your support!",
    user: {
      name: "John Mans",
      location: "USA, Nevada",
      image: "/profile3.png", // Placeholder
    },
  },
];

import SectionStars from "@/components/ui/SectionStars";

const SectionReviews = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 flex flex-col gap-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <div className="max-w-3xl space-y-4">
          <SectionStars className="justify-start" />
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card
            key={review.id}
            className="bg-[#141414] border-zinc-800 p-8 rounded-2xl flex flex-col h-full gap-6"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-zinc-800 flex items-center justify-center"
                >
                  <FaStar className="text-[#FFE500] text-sm" />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <CardTitle className="text-white text-xl font-semibold leading-snug">
                {review.title}
              </CardTitle>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {review.description}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
                {/* Using a colorful placeholder if image fails or just a div */}
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-500" />
                {/* <img src={review.user.image} alt={review.user.name} className="w-full h-full object-cover" /> */}
              </div>
              <div>
                <p className="text-white font-medium text-base">
                  {review.user.name}
                </p>
                <p className="text-zinc-500 text-sm">{review.user.location}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-row justify-between items-center pt-4 border-t border-zinc-900 md:border-none md:pt-0 gap-4 md:gap-0">
        <Button
          variant="outline"
          className="bg-[#141414] text-white border-zinc-800 hover:bg-zinc-800 w-auto px-6 py-5 rounded-lg"
        >
          View All Testimonials
        </Button>

        <div className="flex items-center gap-4 w-auto justify-end">
          <div className="flex gap-3 items-center">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-[#141414] border-zinc-800 text-white hover:bg-zinc-800 w-12 h-12"
            >
              <GoArrowLeft className="text-xl" />
            </Button>
            <div className="text-zinc-400 block">
              <span className="text-white font-medium">01</span> of 10
            </div>
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
    </section>
  );
};

export default SectionReviews;
