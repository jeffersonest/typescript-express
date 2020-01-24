import { Router } from 'express'
import MainController from '../controllers/main.controller'

const main = Router()

main.get('/status', MainController.status)

export default main