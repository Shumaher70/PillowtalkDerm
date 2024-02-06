const dataCreateBlog = (date: Date) => {
   return date
      .toISOString()
      .split("")
      .slice(0, 10)
      .map((chart) => chart.replace("-", "."))
      .join("")
}

export default dataCreateBlog
