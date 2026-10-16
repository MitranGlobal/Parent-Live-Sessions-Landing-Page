import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import Recognise from "@/components/sections/Recognise";
import Stats from "@/components/sections/Stats";
import Outcomes from "@/components/sections/Outcomes";
import Takeaways from "@/components/sections/Takeaways";
import Agenda from "@/components/sections/Agenda";
import Facilitator from "@/components/sections/Facilitator";
import Seat from "@/components/sections/Seat";
import Faq from "@/components/sections/Faq";
import Closing from "@/components/sections/Closing";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Header />
      {/* Offset for the fixed announcement bar + header */}
      <main className="pt-[104px] md:pt-[134px]">
        <Hero />
        <Recognise />
        <Stats />
        <Outcomes />
        <Takeaways />
        <Agenda />
        <Facilitator />
        <Seat />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
