import _ from 'lodash'

export const formatDate = (date) =>
  new Date(
    date
  ).toLocaleDateString(
    'de-CH',
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  )

export const formatTime = (date) => {
  const d = new Date(date)
  const h = d.getHours()
  const m = d.getMinutes()
  return h + (m > 0 ? ':'+_.padStart(''+m, 2, '0') : '') + ' Uhr'

}
