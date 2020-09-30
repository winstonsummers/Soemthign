import Roll from './Roll'

export default interface IRollBuilder {
  d: (sides: number) => Roll
  percentile: () => Roll
  stats: () => Roll  
}