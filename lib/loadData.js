import fs from 'fs'
import dataTypeNames from './dataTypeNames.js'

function loadData () {
  let loadedData = {}

  dataTypeNames.forEach(name => {
    const dataJson = fs.readFileSync(`./records/${name}.json`, 'utf-8')
    const data = JSON.parse(dataJson)
    loadedData[name] = data 
  })

  return loadedData
}

export default loadData
