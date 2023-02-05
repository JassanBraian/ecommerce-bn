const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Routes
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const saleRoutes = require('./routes/saleRoutes');
const productRoutes = require('./routes/productRoutes');

const cors = require('cors');
// const { use } = require('./routes/userRoutes');

connectDB();
dotenv.config();

const app = express();
app.use(express.static(`${__dirname}/public`));

app.use(express.json({ limit: '10kb' }));

app.use(cors());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/sale', saleRoutes);
app.use('/api/v1/product', productRoutes);

const port = process.env.PORT || 4500;

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});