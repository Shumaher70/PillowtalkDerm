import { prisma } from "@/lib/prisma"
;("react-icons/io5")

const Verified = async ({ email }: { email: string }) => {
   const unique = await prisma.user.findUnique({
      where: {
         email: email,
      },
   })

   if (unique!.img?.length! > 0) {
      await prisma.review.updateMany({
         where: {
            email: email,
         },
         data: {
            verified: true,
         },
      })
   } else {
      await prisma.review.updateMany({
         where: {
            email: email,
         },
         data: {
            verified: false,
         },
      })
   }

   return null
}

export default Verified
