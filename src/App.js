import menu from 'console-menu'
import readline from 'readline-sync'
import colors from 'colors'

import ProjectStore from './Entities/Stores/ProjectStore.js'
import ClientStore from './Entities/Stores/ClientStore.js'
import CategoryStore from './Entities/Stores/CategoryStore.js'

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

class App {
  constructor (loadedData, writeDataToFile) {
    this.projectStore = new ProjectStore(loadedData.projects)
    this.clientStore = new ClientStore(loadedData.clients)
    this.categoryStore = new CategoryStore(loadedData.categories)

    this.selectedClientId = ''
    this.selectedProjectId = ''
    this.selectedCategoryId = ''

    this.writeDataToFile = writeDataToFile

    this.renderMainMenu()
  }

  renderCreateCategoryMenu = async () => {
    const categoryName = readline.question(colors.green('\nEnter Category Name"\n'))
    this.categoryStore.addItem({ label: categoryName })
    this.save()
    this.renderSelectCategoryMenu()
  }

  renderCreateClientMenu = async () => {
    const clientName = readline.question(colors.green('\nEnter Client Name:\n'))
    this.clientStore.addItem({ name: clientName })
    this.save()
    this.renderSelectClientMenu()
  }

  renderCreateProjectMenu = async () => {
    const projectName = readline.question(colors.green('\nEnter Project Name:\n'))
    this.projectStore.addItem({ clientId: this.selectedClientId, name: projectName })
    this.save()
    this.renderSelectProjectMenu()
  }

  renderMainMenu = async () => {
    const selection = await menu([
      { hotkey: '1', title: 'Select a Client', action: this.renderSelectClientMenu },
      { hotkey: '2', title: 'Add a Client', action: this.renderCreateClientMenu }
    ])
    selection.action()
  }

  renderSelectCategoryMenu = async () => {
    const projectCategories = this.categoryStore.items
    
    if (projectCategories.length === 0) {
      console.log(colors.red('\nCurrently No Categories Stored\n'))
      this.renderCreateCategoryMenu()
      return
    }

    const menuItems = projectCategories.map((category, index) => {
      return { hotkey: `${index + 1}`, title: category.label, action: () => { this.selectCategoryHandler(category.id) }}
    })

    const selection = await menu(menuItems)
    selection.action()
  }

  renderSelectClientMenu = async () => {
    if (this.clientStore.items.length === 0){
      console.log(colors.red('\nCurrently No Clients Stored\n'))
      this.renderCreateClientMenu()
      return
    }
    
    const menuItems = this.clientStore.items.map((client, index) => {
      return { hotkey: `${index + 1}`, title: client.name, action: () => { this.selectClientHandler(client.id) }}
    })

    const selection = await menu(menuItems)
    selection.action()
  }

  renderSelectProjectMenu = async () => {
    const clientProjects = this.projectStore.items.filter(p => p.clientId === this.selectedClientId)

    if (clientProjects.length === 0) {
      console.log(colors.red('\nCurrently No Projects for this Client Stored\n'))
      this.renderCreateProjectMenu()
      return
    }

    const menuItems = clientProjects.map((project, index) => {
      return { hotkey: `${index + 1}`, title: project.name, action: () => { this.selectProjectHandler(project.id) }}
    })

    const selection = await menu(menuItems)
    selection.action()
  }

  save = () => {
    // write data to file
    // this.writeDataToFile({
    //   projects: this.projectStore.props,
    //   clients: this.clientStore.props
    // })
  }

  selectCategoryHandler = categoryId => {
    this.selectedCategoryId = categoryId
    // TODO: describe task menu
  }

  selectClientHandler = clientId => {
    this.selectedClientId = clientId
    this.renderSelectProjectMenu()
  }

  selectProjectHandler = projectId => {
    this.selectedProjectId = projectId
    this.renderSelectCategoryMenu()
  }
}

export default App
