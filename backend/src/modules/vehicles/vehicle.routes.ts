import { Router } from 'express'
import { createVehicle, getVehiclesByUser } from './vehicle.controller'

const router = Router()

router.post('/', createVehicle)
router.get('/user/:userId', getVehiclesByUser)

export default router
