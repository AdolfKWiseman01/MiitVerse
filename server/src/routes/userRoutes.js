import { Router } from 'express'

import { deleteUser, getCurrentUser, listUsers } from '../controllers/userController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { requireRole } from '../middleware/roleMiddleware.js'

const router = Router()

router.get('/me', authMiddleware, getCurrentUser)
router.get('/', authMiddleware, requireRole('admin', 'moderator'), listUsers)
router.delete('/:id', authMiddleware, requireRole('admin'), deleteUser)

export default router