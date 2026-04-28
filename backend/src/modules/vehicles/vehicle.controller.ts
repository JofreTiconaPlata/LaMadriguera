import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export const createVehicle = async (req: Request, res: Response) => {
  try {
    const { userId, plate, brand, model, color } = req.body

    const vehicle = await prisma.vehicle.create({
      data: {
        userId,
        plate,
        brand,
        model,
        color,
      },
    })

    res.status(201).json(vehicle)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear vehículo', error })
  }
}

export const getVehiclesByUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId)

    const vehicles = await prisma.vehicle.findMany({
      where: { userId },
    })

    res.json(vehicles)
  } catch (error) {
    res.status(500).json({ message: 'Error al listar vehículos', error })
  }
}
