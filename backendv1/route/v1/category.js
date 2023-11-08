
import { Router } from 'express'
import { createCategory } from '../../controllers/CategoryController.js'
import { testing } from '../../controllers/TestingController.js'
import { getBalance } from '../../controllers/biller/DigiflazzController.js'

const categoryRoute = Router()

categoryRoute.post('/category', createCategory)
categoryRoute.get('/testing', getBalance)

export default categoryRoute;