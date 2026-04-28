import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './modules/users/user.routes'
import parkingRoutes from './modules/parkings/parking.routes'
import vehicleRoutes from './modules/vehicles/vehicle.routes'
import bookingRoutes from './modules/bookings/booking.routes'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend La Madriguera funcionando',
  })
})

app.use('/api/users', userRoutes)
app.use('/api/parkings', parkingRoutes)
app.use('/api/vehicles', vehicleRoutes)
app.use('/api/bookings', bookingRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
