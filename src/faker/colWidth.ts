export function genColWidth(length:number){
  const colWidths = [100, 120, 80, 60, 140, 200, 180];
  // @ts-ignore
  return Array.from(Array(length).keys()).map(index=>{
    return colWidths[Math.floor(Math.random() * colWidths.length)]
  })
}
