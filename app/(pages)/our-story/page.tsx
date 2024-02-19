import ViewportMotionSection from "@/motion/ViewportMotionSection"
import FoundedSection from "./components/FoundedSection"
import OurPhilosophySection from "./components/OurPhilosophySection"
import OurStorySection from "./components/OurStorySection"
import SkinIsComplexSection from "./components/SkinIsComplexSection"
import SocialImpactSection from "./components/SocialImpactSection"

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
