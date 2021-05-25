export const segmentTrack = async (event: string, properties?: object) => {
  const {analytics} = window || undefined
  if (!analytics) return
  analytics.track(event, properties)
}
