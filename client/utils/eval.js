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
  const risk = keys.reduce((acc, key) => {
    if (section[key].risk) acc.risk += section[key].risk
    if (section[key].resiliency) acc.resiliency += section[key].resiliency
    return acc
  }, { risk: 0, resiliency: 0 })
  risk.risk = Math.round(risk.risk * 10) / 10
  risk.resiliency = Math.round(risk.resiliency * 10) / 10
  return risk
}

module.exports = {
  getRisks
}
