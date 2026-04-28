import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export const createBooking = async (req: Request, res: Response) => {
  try {
    const {
      userId,
      parkingId,
      slotId,
      vehicleId,
      startTime,
      endTime,
      totalPrice,
    } = req.body

    const booking = await prisma.booking.create({
      data: {
        userId,
        parkingId,
        slotId,
        vehicleId,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        totalPrice,
        status: 'PENDING_PAYMENT',
      },
    })

    res.status(201).json(booking)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear reserva', error })
  }
}

export const getBookingsByUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId)

    const bookings = await prisma.booking.findMany({
      where: { userId },
      include: {
        parking: true,
        slot: true,
        vehicle: true,
        payment: true,
      },
    })

    res.json(bookings)
  } catch (error) {
    res.status(500).json({ message: 'Error al listar reservas', error })
  }
}
