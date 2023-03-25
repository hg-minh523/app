const formatMoney = (money) => {
    // Create our number formatter.
    
    if(typeof(money) === 'string') {
        money = Number(money)
    }
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return formatter.format(money)
}

export default formatMoney