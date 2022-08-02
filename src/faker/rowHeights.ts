export function genRowHeights(length: number) {
  const rowHeights = [30, 35, 40, 45, 50, 55, 60, 65];
  // @ts-ignore
  return Array.from(Array(length).keys()).map(index=>{
    return rowHeights[Math.floor(Math.random() * rowHeights.length)]
  })
}
