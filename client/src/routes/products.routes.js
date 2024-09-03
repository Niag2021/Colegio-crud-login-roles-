import { Router } from "express";
const router = Router()

import * as productsCtrl from '../controllers/products.controllers.js';
import { authJwt } from "../middlewares/index.js";
//import { authJwt } from "../middlewares/authJwt.js";
//import { verifyToken, isModerator, isAdmin } from "../middlewares/authJwt.js";

//router.post('/', verifyToken, isModerator, productsCtrl.createProduct);
router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.createProduct);
router.get('/', productsCtrl.getProducts);
router.get('/:productId', productsCtrl.getProductById);
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.updateProductById);
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin],productsCtrl.deleteProductById);

export default router;