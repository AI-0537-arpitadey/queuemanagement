const mongoose = require("mongoose")
const Shop = require("../models/shop")

module.exports = {
  async get(req, res) {
    try {
      const input = req.body

      if (input === "_flightshop") {
        // return multiple documents
        const documents = await Shop.find()
        return res.json({ error: false, documents })
      }

      // return a single flight queue
      const flightQueue = await Shop.findOne()
      return res.json({ error: false, flightQueue })
    } catch (err) {
      return res.status(500).json({ error: true, message: err.message })
    }
  }

}
