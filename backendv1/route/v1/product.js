
import { Router } from 'express'
import { createProduct, getAllProduct, getProductBySlug } from '../../controllers/ProductController.js'
import upload from '../../utils/uploadFile.js'

const productRoute = Router()

// productRoute.post('/product', upload.single('file'), createProduct)
productRoute.post('/product', createProduct)
productRoute.get('/product', getAllProduct)
productRoute.get('/product/:slug', getProductBySlug)

export default productRoute;