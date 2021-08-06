import bigInt from 'big-integer'
/* global BigInt */
if (typeof BigInt === 'undefined') {
  window.BigInt = bigInt
}
