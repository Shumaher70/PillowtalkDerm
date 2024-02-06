const backgroundTag = (tag: string) => {
   let bgTag
   const t = tag.trim().toLocaleLowerCase()

   if (t === "ingredients") {
      bgTag = "bg-pink-500"
   } else if (t === "products") {
      bgTag = "bg-green-700"
   } else if (t === "lifestyle") {
      bgTag = "bg-pink-400"
   } else if (t === "skin concerns") {
      bgTag = "bg-purple-700"
   } else if (t === "routines") {
      bgTag = "bg-yellow-500"
   }
   return bgTag
}
export default backgroundTag
