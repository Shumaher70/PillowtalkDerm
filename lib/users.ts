import { prisma } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs"

const users = async () => {
   const user = await currentUser()

   if (user) {
      const findUser = await prisma.user.findUnique({
         where: {
            id: user.id,
         },
      })

      if (findUser === null) {
         await prisma.user.create({
            data: {
               id: user.id,
               first_name: user.firstName ?? "without first name",
               last_name: user.lastName ?? "without last name",
               email: user.emailAddresses[0].emailAddress,
               img: user.imageUrl,
            },
         })
      }
   }
}

export default users
