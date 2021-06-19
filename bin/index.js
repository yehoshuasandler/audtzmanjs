import loadData from '../lib/loadData.js'
import preload from '../lib/preload.js'
import App from '../src/App.js'

preload()
const loadedData = loadData()
const app = new App(loadedData)