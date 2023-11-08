import { testing } from "../../controllers/TestingController.js";
import categoryRoute from "./category.js";
import memberRoute from "./member.js";
import productRoute from "./product.js";
import express from 'express'
const router = express();

router.use('/v1', productRoute)
router.use('/v1', memberRoute)
router.use('/v1', categoryRoute)


// router.use('/test', testing)

export default router;