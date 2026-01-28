import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const faqs = [
  {
    id: 1,
    question: "How do I search for properties on Estatein?",
    description:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    id: 2,
    question: "What documents do I need to sell my property through Estatein?",
    description:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    id: 3,
    question: "How can I contact an Estatein agent?",
    description:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
];

import SectionStars from "@/components/ui/SectionStars";

const SectionFour = () => {
  return (
    <div className="w-full py-10 md:py-16 px-6 md:px-12 lg:px-24 flex flex-col gap-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <div className="max-w-3xl space-y-4">
          <SectionStars className="justify-start" />
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Find answers to common questions about Estatein's services, property
            listings, and the real estate process. We're here to provide clarity
            and assist you every step of the way.
          </p>
        </div>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {faqs.map((faq) => (
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
    </div>
  );
};

export default SectionFour;
