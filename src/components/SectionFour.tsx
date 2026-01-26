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

const SectionFour = () => {
  return (
    <section className="w-full bg-[#0a0a0a] py-16 px-6 md:px-12 lg:px-24 flex flex-col gap-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Find answers to common questions about Estatein's services, property
            listings, and the real estate process. We're here to provide clarity
            and assist you every step of the way.
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800 w-fit rounded-lg px-6"
        >
          View All FAQ's
        </Button>
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
      <div className="flex justify-between items-center pt-4 border-t border-zinc-900 md:border-none md:pt-0">
        <div className="text-zinc-400 hidden md:block">
          <span className="text-white font-medium">01</span> of 10
        </div>

        <div className="flex gap-3 ml-auto md:ml-0">
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
    </section>
  );
};

export default SectionFour;
