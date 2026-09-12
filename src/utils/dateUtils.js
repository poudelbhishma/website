/**
 * Calculates human-readable duration between start date and end date (or current date).
 * @param {string | Date} startDateStr - Start date (e.g. '2023-10-01')
 * @param {string | Date} [endDateStr] - End date, defaults to current date if omitted
 * @param {boolean} [useShort=false] - Whether to use short labels (yr/mo)
 * @returns {string} Formatted duration (e.g., "2 Years 11 Months" or "2 yrs 11 mos")
 */
export function calculateDuration(startDateStr, endDateStr = null, useShort = false) {
  const start = new Date(startDateStr)
  const end = endDateStr ? new Date(endDateStr) : new Date()

  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()
  let days = end.getDate() - start.getDate()

  if (days < 0) {
    months -= 1
  }
  if (months < 0) {
    years -= 1
    months += 12
  }

  const yLabel = useShort ? (years === 1 ? 'yr' : 'yrs') : (years === 1 ? 'Year' : 'Years')
  const mLabel = useShort ? (months === 1 ? 'mo' : 'mos') : (months === 1 ? 'Month' : 'Months')

  const parts = []
  if (years > 0) parts.push(`${years} ${yLabel}`)
  if (months > 0) parts.push(`${months} ${mLabel}`)

  return parts.length > 0 ? parts.join(' ') : (useShort ? '< 1 mo' : 'Less than a Month')
}

export const CAREER_START_DATE = '2023-10-01'
