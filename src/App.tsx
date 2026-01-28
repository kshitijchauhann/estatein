import Header from "@/components/Header";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionReviews from "@/components/SectionReviews";
import SectionFour from "@/components/SectionFour";
import Footer from "@/components/Footer";

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
