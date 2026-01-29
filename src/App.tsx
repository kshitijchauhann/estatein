import Header from "@/components/layout/Header";
import SectionOne from "@/components/sections/SectionOne";
import SectionTwo from "@/components/sections/SectionTwo";
import SectionThree from "@/components/sections/SectionThree";
import SectionReviews from "@/components/sections/SectionReviews";
import SectionFour from "@/components/sections/SectionFour";
import Footer from "@/components/layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionReviews />
      <SectionFour />
      <Footer />
    </div>
  );
};

export default App;
