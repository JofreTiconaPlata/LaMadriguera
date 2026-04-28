import { Router } from 'express'
import { createUser, getUsers } from './user.controller'

const router = Router()

router.post('/', createUser)
router.get('/', getUsers)

export default router
