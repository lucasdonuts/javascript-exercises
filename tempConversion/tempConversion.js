const ftoc = function(fTemp) {
  let newTemp = (fTemp - 32) * (5/9);
  return Math.round(newTemp * 10) / 10;
}

const ctof = function(cTemp) {
  let newTemp = (cTemp * 9)/5 + 32;
  return Math.round(newTemp * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
