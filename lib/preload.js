import fs from 'fs'
import dataTypeNames from './dataTypeNames.js'

function preload () {
  createRecordsDirectory()
  createDataFiles()
}

function createRecordsDirectory () {
  const hasRecordsDirectory = fs.existsSync('./records')
  if (!hasRecordsDirectory) fs.mkdirSync('./records')
}

function createDataFiles () {
  dataTypeNames.forEach(name => {
    const projectsFilePath = `./records/${name}.json`
    const hasProjectsFile = fs.existsSync(projectsFilePath)
    if (!hasProjectsFile) fs.writeFileSync(projectsFilePath, JSON.stringify([]))
  })
}

export default preload