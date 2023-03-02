const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name:{
    type: String,
    required: [ true, 'Name is required' ],
    trim: true
  },
  brand:{
    type: String,
    required: [ true, 'Brand is required' ],
    trim: true
  },
  price:{
    type: Number,
    required: [ true, 'Price is required' ],
    default: 0
  },
  offerPrice:{
    type: Number,
    default: 0
  },
  stock:{
    type: Number,
    required: [ true, 'Stock is required' ],
    default: 0
  },
  isInOffer:{
    type: Boolean,
    default: false
  },
  category:{
    type: String
  },
  isHighligted:{
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Product = model('Product', productSchema);

module.exports = Product;