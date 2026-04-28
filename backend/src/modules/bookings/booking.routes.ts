import { Router } from 'express'
import { createBooking, getBookingsByUser } from './booking.controller'

const router = Router()

router.post('/', createBooking)
router.get('/user/:userId', getBookingsByUser)

export default router
