const Transaction = require("../models/transaction");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const transaction = await new Transaction(req.body).save();
        res.send(transaction);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.send(transactions);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const transaction = await Transaction.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(transaction);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        res.send(transaction);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;