import { Router } from 'express'
import { createParking, getParkings } from './parking.controller'

const router = Router()

router.post('/', createParking)
router.get('/', getParkings)

export default router
