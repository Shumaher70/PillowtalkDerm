import { createNextRouteHandler } from "uploadthing/next"
import { ourFileRouter } from "./core"
import { UTApi } from "uploadthing/server"

export const { GET, POST } = createNextRouteHandler({
   router: ourFileRouter,
})

export async function DELETE(request: Request) {
   const data = await request.json()

   const newUrl = Array.isArray(data.url)
      ? data.url.map((url: string) =>
           url.substring(data.url.lastIndexOf("/") + 1)
        )
      : data.url.substring(data.url.lastIndexOf("/") + 1)
   const utapi = new UTApi()
   await utapi.deleteFiles(newUrl)
   return Response.json({ message: "ok" })
}
