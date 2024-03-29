const Sale = require('../models/Sale.js');

exports.getSaleById = async (req, res) => {
    const { id } = req.params;
    try {
        const sale = await Sale.findById(id);
        return res.status(200).json({ ok: true, sale });
    } catch (error) {
        return res.status(500).json({ ok: false, message: 'Error B105' });
    }
}

exports.getSaleUnpaidByUserLoggedIn = async (req, res) => {
    try {
        //const { _id: userid, role } = req.user;
        //Luego cambiar id por userId de linea 5
        const salesUnpaids = await Sale.find({
            "customer.userid": "631d3a2177caec4746e894e5",
            "ispaid": false
        });

        return res.status(200).json({ ok: true, sale: salesUnpaids.slice(-1)[0] });

    } catch (error) {
        return res.status(500).json({ ok: false, message: 'Error B101' });
    }
}

exports.deleteProductsOfSaleUnpaid = async (req, res) => {
    const { id } = req.params;
    try {
        const sale = await Sale.findById(id);
        if (!sale)
            return res.status(404).json({ ok: false, message: 'Sale not found' });

        sale.products = [];
        const updatedSale = await Sale.findByIdAndUpdate(id, sale, { new: true });
        return res.status(200).json({ ok: true, sale: updatedSale });
    } catch (error) {
        return res.status(500).json({ ok: false, message: 'Error B101' });
    }
}

exports.createSale = async (req, res) => {
    try {
        const { _id: userid, role } = req.user;
        const sale = new Sale({ ...req.body, userid }); //REVISAR SI IMPACTA DENTRO DE CUSTOMER
        const savedSale = await sale.save();
        return res
            .status(201)
            .json({
                ok: true,
                message: "Sale created successfully",
                sale: savedSale,
            });
    } catch (error) {
        return res.status(500).json({ ok: false, message: "Error B102" });
    }
};

exports.updateSale = async (req, res) => {
    const { id } = req.params;
    try {
        const sale = await Sale.findById(id);
        if (!sale) {
            return res.status(404).json({ ok: false, message: 'Sale not found' });
        }
        const updatedSale = await Sale.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({ ok: true, sale: updatedSale });
    } catch (error) {
        res.status(500).json({ message: 'Error B103' });
    }
}