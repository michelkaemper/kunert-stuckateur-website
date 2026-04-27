import { HeroSection } from "@/components/sections/HeroSection";
import { LeistungenSection } from "@/components/sections/LeistungenSection";
import { UeberUnsSection } from "@/components/sections/UeberUnsSection";
import { ReferenzenSection } from "@/components/sections/ReferenzenSection";
import { RezensionenSection } from "@/components/sections/RezensionenSection";
import { KontaktSection } from "@/components/sections/KontaktSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LeistungenSection />
      <UeberUnsSection />
      <ReferenzenSection />
      <RezensionenSection />
      <KontaktSection />
    </>
  );
}
