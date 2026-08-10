const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter


// Add or subtract days from today
addFilter('duration', function (date, days) {
  let result

  if (date === 'today') {
    result = new Date()
  } else {
    result = new Date(date)
  }

  result.setDate(result.getDate() + Number(days))

  return result
})

// Format a date in GOV.UK style
addFilter('govukDate', function (date, options = {}) {
  const result = new Date(date)

  if (isNaN(result.getTime())) {
    return ''
  }

  const day = result.getDate()

  const month = result.toLocaleString('en-GB', {
    month: options.truncate ? 'short' : 'long'
  })

  const year = result.getFullYear()

  return `${day} ${month} ${year}`
})