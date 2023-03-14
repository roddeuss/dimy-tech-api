const express = require("express");
const router = express.Router();
const Transaksi = require('../models/transaksi');

// POST /transaksi/add
router.post('/add', async (req, res) => {
  const transaksi = new Transaksi({
    customer_name: req.body.customer_name,
    customer_address: req.body.customer_address,
    product_name: req.body.product_name,
    payment_name: req.body.payment_name,
  });
  try {
    await transaksi.save();
    res.status(201).json({ message: 'Success Add Transaksi' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to save the Transaksi.' });
  }
});

// GET /transaksi
router.get('/', async (req, res) => {
  try {
    const transaksiList = await Transaksi.find();
    res.json(transaksiList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch the Transaksi.' });
  }
});

// GET /transaksi/:id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const transaksi = await Transaksi.findById(id);
    if (!transaksi) {
      res.status(404).json({ message: 'Transaksi not found.' });
    } else {
      res.json(transaksi);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch the Transaksi.' });
  }
});

// PUT /transaksi/:id
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updates = {
      customer_name: req.body.customer_name,
      customer_address: req.body.customer_address,
      product_name: req.body.product_name,
      payment_name: req.body.payment_name,
    };
    try {
      const transaksi = await Transaksi.findByIdAndUpdate(id, updates, {
        new: true,
      });
      if (!transaksi) {
        res.status(404).json({ message: 'Transaksi not found.' });
      } else {
        res.json(transaksi);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to update the Transaksi.' });
    }
  });
  

module.exports = router;
