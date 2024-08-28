import { Router } from "express";
const router = Router()

router.get('/', (req, res) => res.json('Todos los productos.'))

export default router;