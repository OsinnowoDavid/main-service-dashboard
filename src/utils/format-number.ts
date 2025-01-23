export const formatCurrency = (input: string) => {
  // Remove all non-numeric characters except the decimal point
  const numericValue = input.replace(/[^0-9.]/g, '')

  // Parse the number and format it
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(parseFloat(numericValue || '0'))

  return formattedValue
}

export const formatNumber = (input: string) => {
  // Remove non-numeric characters except the dot for decimals
  const numericValue = input.replace(/\D/g, '')

  // Format the number with commas
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
