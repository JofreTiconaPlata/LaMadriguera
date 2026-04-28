import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { fullName, email, passwordHash, phone, role } = req.body

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        passwordHash,
        phone,
        role,
      },
    })

    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario', error })
  }
}

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        vehicles: true,
        bookings: true,
      },
    })

    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error al listar usuarios', error })
  }
}