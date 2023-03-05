const { Router } = require('express');
const { restrictTo, protect } = require('../middlewares/userMiddleware');
const {
  getSaleUnpaidByUserLoggedIn,
  createSale,
  updateSale,
  getSaleById
} = require('../controllers/saleController');

const router = Router();

router.route('/')
  // .get(protect, getSales)
  .get(getSaleUnpaidByUserLoggedIn)
  .post(createSale);

router.route('/:id')
  .put(updateSale)
  .get(getSaleById);

module.exports = router;