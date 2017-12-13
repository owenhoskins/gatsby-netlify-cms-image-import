
export const formatDate = (date) =>
  new Date(
    date
  ).toLocaleDateString(
    'de-CH',
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  )
