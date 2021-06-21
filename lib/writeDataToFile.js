import fs from 'fs'

function writeDataToFile (data) {
  const clientsJSON = JSON.stringify(data.clients, null, 2)
  fs.writeFileSync('./records/clients.json', clientsJSON)

  const projectsJSON = JSON.stringify(data.projects, null, 2)
  fs.writeFileSync('./records/projects.json', projectsJSON)

  const categoriesJSON = JSON.stringify(data.categories, null, 2)
  fs.writeFileSync('./records/categories.json', categoriesJSON)

  const tasksJSON = JSON.stringify(data.tasks, null, 2)
  fs.writeFileSync('./records/tasks.json', tasksJSON)
}

export default writeDataToFile
