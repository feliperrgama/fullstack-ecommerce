import { Router } from "express";
import { createProduct, deleteProduct, getProductsById, listProducts, updateProduct } from "./productsCrontoller";


// products endpoints

const router = Router();

router.get('/', listProducts);

router.get('/:id', getProductsById);

router.post('/', createProduct);

router.delete('/', deleteProduct);

router.put('/', updateProduct);

export default router;