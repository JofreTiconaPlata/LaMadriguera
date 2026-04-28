import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export const createParking = async (req: Request, res: Response) => {
  try {
    const {
      name,
      address,
      latitude,
      longitude,
      pricePerHour,
      imageUrl,
      openingTime,
      closingTime,
    } = req.body

    const parking = await prisma.parking.create({
      data: {
        name,
        address,
        latitude,
        longitude,
        pricePerHour,
        imageUrl,
        openingTime,
        closingTime,
      },
    })

    res.status(201).json(parking)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear parqueo', error })
  }
}

export const getParkings = async (_req: Request, res: Response) => {
  try {
    const parkings = await prisma.parking.findMany({
      include: {
        slots: true,
        ratings: true,
      },
    })

    res.json(parkings)
  } catch (error) {
    res.status(500).json({ message: 'Error al listar parqueos', error })
  }
}
