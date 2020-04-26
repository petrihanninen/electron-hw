const axios = require('axios')

// Get data from cryptocompare.com
const get = (fsyms, tsyms, fn) => {
  const f = fsyms.toUpperCase()
  const t = tsyms.toUpperCase()

  axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${f}&tsyms=${t}`)
    .then(res => res.data[f][t])
    .then(fn)
    .catch(err => console.log(err))
}

/**
 * @callback bitcoinCB
 * @arg {number} val - How much Bitcoin is worth in Euros ATM
 */

/**
 * Get Bitcoin price in euros
 * 
 * @arg {bitcoinCB} fn - Callback handling bitcoin value
 */
exports.getBTC = fn => get('BTC', 'EUR', fn)