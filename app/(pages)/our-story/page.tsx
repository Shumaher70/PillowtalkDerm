import ViewportMotionSection from "@/motion/ViewportMotionSection"
import FoundedSection from "./components/FoundedSection"
import OurPhilosophySection from "./components/OurPhilosophySection"
import OurStorySection from "./components/OurStorySection"
import SkinIsComplexSection from "./components/SkinIsComplexSection"
import SocialImpactSection from "./components/SocialImpactSection"
import { Metadata } from "next"

export const metadata: Metadata = {
   title: "Our story section",
   description:
      "Learn about the story of PillowtalkDerm by Dr. Shereene Idriss, a formulation-first, science-backed skin care line founded by a board certified dermatologist. Cruelty-free, fragrance-free, non-irritating, and clinically tested.",
}

const page = () => {
   return (
      <main>
         <ViewportMotionSection>
            <OurStorySection />
         </ViewportMotionSection>

         <ViewportMotionSection>
            <SkinIsComplexSection />
         </ViewportMotionSection>

         <ViewportMotionSection>
            <FoundedSection />
         </ViewportMotionSection>

         <ViewportMotionSection>
            <OurPhilosophySection />
         </ViewportMotionSection>

         <ViewportMotionSection>
            <SocialImpactSection />
         </ViewportMotionSection>
      </main>
   )
}

export default page
