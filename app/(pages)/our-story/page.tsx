import { MotionSection } from "@/motion/MotionSection"
import FoundedSection from "./components/FoundedSection"
import OurPhilosophySection from "./components/OurPhilosophySection"
import OurStorySection from "./components/OurStorySection"
import SkinIsComplexSection from "./components/SkinIsComplexSection"
import SocialImpactSection from "./components/SocialImpactSection"

const page = () => {
   return (
      <main>
         <MotionSection>
            <OurStorySection />
         </MotionSection>

         <MotionSection>
            <SkinIsComplexSection />
         </MotionSection>

         <MotionSection>
            <FoundedSection />
         </MotionSection>

         <MotionSection>
            <OurPhilosophySection />
         </MotionSection>

         <MotionSection>
            <SocialImpactSection />
         </MotionSection>
      </main>
   )
}

export default page
