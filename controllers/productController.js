const Product = require('../models/Product.js');

exports.getProducts = async(req, res) =>{
  try {
    const products = await Product.find({});
    return res.status(201).json({ ok: true, products: products });
  } catch (error) {
    return res.status(500).json({ ok: false, message: 'Error B101' });
  }
};

exports.createProduct = async(req, res) =>{
  try {
    const product = new Product({ ...req.body });
    const savedProduct = await product.save();
    return res.status(201).json({ message:'El producto ha sido creado', product: savedProduct })
  } catch (error) {
    return res.status(500).json({ ok: false, message: 'El servidor ha fallado' })
  }
};

exports.getProductById = async(req, res) =>{
  const { id } = req.params;
    try {
    const product = await Product.findById(id);
    return res.status(201).json({ ok: true, product: product });
  } catch (error) {
    return res.status(500).json({ ok: false, message: 'El servidor ha fallado' })
  }
};

exports.updateProduct = async (req, res) =>{
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if(!product){
      res.status(404).json({ message: 'Product not found' })
    };
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true })
    return res.status(201).json({ ok: true, updatedProduct: updatedProduct })
  } catch (error) {
    return res.status(500).json({ ok: false, message: 'El servidor ha fallado' })
  }
}

exports.deleteProduct = async (req, res) =>{
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(201).json({ ok: true, message: 'Product deleted' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: 'El servidor ha fallado' });
  }
}