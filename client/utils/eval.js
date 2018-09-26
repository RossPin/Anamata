function getRisks (yp) {
  if (yp.answers) {
    const keys = Object.keys(yp.answers)
    const risks = {}
    keys.map(key => { risks[key] = getRisk(yp.answers[key]) })
    risks.total = getRisk(risks)
    return risks
  }
}

function getRisk (section) {
  const keys = Object.keys(section)
  return keys.reduce((acc, key) => {
    if (section[key].risk) acc.risk += section[key].risk
    if (section[key].resiliency) acc.resiliency += section[key].resiliency
    return acc
  }, { risk: 0, resiliency: 0 })
}

module.exports = {
  getRisks
}
