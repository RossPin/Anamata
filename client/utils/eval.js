const riskThreshhold = 20

function getRisks (yp) {
  if (yp.answers) {
    const keys = Object.keys(yp.answers)
    const risks = {}
    keys.map(key => { risks[key] = getRisk(yp.answers[key]) })
    risks.total = getRisk(risks)
    risks.factor = risks.total.risk - risks.total.resiliency
    return risks
  }
  return { factor: 0 }
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

function triage (current) {
  const triage = {
    alert: [],
    high: [],
    normal: []
  }
  current.map(yp => {    
    if (yp.alerts) triage.alert.push(yp)
    else if (yp.risk.factor > riskThreshhold) triage.high.push(yp)
    else triage.normal.push(yp)
  })
  triage.high = triage.high.sort((a, b) => b.risk.factor - a.risk.factor)
  return triage
}

module.exports = {
  getRisks,
  triage
}
