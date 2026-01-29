import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FAQS } from "@/data";
import SectionStars from "@/components/ui/SectionStars";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Pagination } from "@/components/common/Pagination";
import { usePagination } from "@/hooks/usePagination";

const SectionFour = () => {
  const { currentPage, goToPrevious, goToNext } = usePagination({
    totalPages: 10,
  });

  return (
    <div className="w-full py-10 md:py-16 px-6 md:px-12 lg:px-24 flex flex-col gap-12">
      {/* Header Section */}
      <SectionHeader
        preTitle={<SectionStars className="justify-start" />}
        title="Frequently Asked Questions"
        description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
      />

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FAQS.map((faq) => (
          <Card
            key={faq.id}
            className="bg-[#141414] border-zinc-800 p-8 rounded-2xl flex flex-col justify-between"
          >
            <CardHeader className="p-0">
              <CardTitle className="text-white text-xl font-semibold leading-snug">
                {faq.question}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0 ">
              <p className="text-zinc-400 text-sm leading-relaxed">
                {faq.description}
              </p>
            </CardContent>

            <CardFooter className="p-0">
              <Button
                variant="outline"
                className="bg-[#1a1a1a] border-zinc-800 text-white hover:bg-zinc-800 px-6 py-5 rounded-xl font-medium"
              >
                Read More
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
          View All FAQ's
        </Button>

        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPrevious={goToPrevious}
          onNext={goToNext}
          className="w-auto border-none pt-0"
        />
      </div>
    </div>
  );
};

export default SectionFour;
