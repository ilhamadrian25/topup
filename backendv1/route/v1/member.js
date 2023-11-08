
import { Router } from 'express'
import { Login, Register } from '../../controllers/Auth/Member/AuthMemberController.js';
import { RefreshToken } from '../../controllers/Auth/Member/RefreshTokenController.js';

const memberRoute = Router()

memberRoute.post('/register', Register)

memberRoute.post('/login', Login)
memberRoute.get('/token', RefreshToken)

export default memberRoute;