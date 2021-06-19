import menu from 'console-menu'

class MainMenuController {
  constructor() {

  }

  

  getView = async () => {

    console.log('Please choose an option:')

    const value = await menu([
      { hotkey: '1', title: 'Select a Project', action: 'selectProject' }
    ])
    console.log(value)
  }
}

export default MainMenuController
