/**
 * Formatting euros to Finnish standards: 1234.56 => 1 234,56 €
 * 
 * @arg {number|string} val - The value to be formatted
 */
exports.formatEUR = val => `${Number(val).toLocaleString('fi')} €`