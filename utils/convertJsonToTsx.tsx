import React from "react"

interface ContentItem {
   text: string
   type: string
   className: string
   content?: ContentItem[]
   items?: string[]
}

const convertJsonToTsx = (content: ContentItem[]) => {
   return content.map((item, index) => {
      const { type, className, text, items, content: innerContent } = item

      const key = (keyIndex: number) => `${type}_${keyIndex}`

      switch (type) {
         case "p":
            if (innerContent && innerContent.length > 0) {
               return innerContent.map((insertedContent, insertedIndex) => {
                  return (
                     <React.Fragment key={key(insertedIndex)}>
                        {convertJsonToTsx([insertedContent])}
                     </React.Fragment>
                  )
               })
            } else {
               return React.createElement(
                  type as React.ElementType,
                  { key: key(index), className },
                  text
               )
            }
         case "text":
         case "strong":
         case "h2":
            return React.createElement(
               type as React.ElementType,
               { key: key(index), className },
               text
            )

         case "br":
            return React.createElement("br", { key: key(index) })

         case "i":
            return React.createElement(
               "i",
               { key: key(index), className },
               text
            )

         case "ul":
            if (items && items.length > 0) {
               return React.createElement(
                  "ul",
                  { key: key(index), className },
                  items.map((li, liIndex) =>
                     React.createElement("li", { key: key(liIndex) }, li)
                  )
               )
            }
            break

         case "div":
            if (innerContent && innerContent.length > 0) {
               return innerContent.map((insertedContent, insertedIndex) => (
                  <React.Fragment key={key(insertedIndex)}>
                     {convertJsonToTsx([insertedContent])}
                  </React.Fragment>
               ))
            }
            break

         default:
            return null
      }
   })
}

export default convertJsonToTsx
