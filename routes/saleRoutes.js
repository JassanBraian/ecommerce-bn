const { Router } = require('express');
const { restrictTo, protect } = require('../middlewares/userMiddleware');
const {
  getSales,
  createSale,
  updateSale,
  getSaleById
} = require('../controllers/saleController');

const router = Router();

router.route('/')
  // .get(protect, getSales)
  .get(getSales)
  .post(createSale);

router.route('/:id')
  .put(updateSale)
  .get(getSaleById);

module.exports = router;