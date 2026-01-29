import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { REVIEWS } from "@/data";
import SectionStars from "@/components/ui/SectionStars";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Pagination } from "@/components/common/Pagination";
import { usePagination } from "@/hooks/usePagination";

const SectionReviews = () => {
  const { currentPage, goToPrevious, goToNext } = usePagination({
    totalPages: 10,
  });

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 flex flex-col gap-12">
      {/* Header Section */}
      <SectionHeader
        preTitle={<SectionStars className="justify-start" />}
        title="What Our Clients Say"
        description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
      />

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((review) => (
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

        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPrevious={goToPrevious}
          onNext={goToNext}
          className="w-auto border-none pt-0"
        />
      </div>
    </section>
  );
};

export default SectionReviews;
