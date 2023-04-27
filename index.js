var customerName = 'bob'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
  return customerName
}

var bestCustomer;

function setBestCustomer() {
   bestCustomer  = 'not bob'
}
setBestCustomer()

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
  return bestCustomer
}

const leastFavoriteCustomer = 'Bal'
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'maybe bob'
  return leastFavoriteCustomer
}
